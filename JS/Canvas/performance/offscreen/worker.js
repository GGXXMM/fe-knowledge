// Worker 线程全局变量
let offscreenCtx = null;// 离屏 Canvas 上下文
let ball = null;// 球体状态
let running = true;// 动画运行状态
let lastTime = 0;// 上一帧时间戳
let canvasConfig = {// 画布配置
  width: 0,
  height: 0,
  dpr: 1
}

// 1. 监听主线程发来的消息
self.onmessage = (e) => {
  const data = e.data;
  switch (data.type) {
    case 'init':
      handleInit(data);
      break;
    case 'pause':
      running = false;
      break;
    case 'resume':
      running = true;
      // 恢复时，重置上一帧时间，避免动画跳变
      lastTime = performance.now();
      requestAnimationFrame(workerAnimationLoop);
      break;
    case 'speed':
      handleSpeedUpdate(data.speed);
      break;
    case 'resize':
      handleResize(data);
      break;
  }
}

// 2. 处理初始化消息
function handleInit(data) {
  try {
    // 2.1 获取离屏 Canvas 上下文
    offscreenCtx = data.canvas.getContext('2d');
    if (!offscreenCtx) {
      throw new Error('获取离屏 Canvas 上下文失败')
    }
    // 2.2 初始化画布配置
    canvasConfig.width = data.width;
    canvasConfig.height = data.height;
    canvasConfig.dpr = data.dpr;

    // 2.3 初始化球体状态
    ball = {
      x: data.width / 2,
      y: data.height / 2,
      r: 20,
      vx: 200 * data.speed,
      vy: 150 * data.speed
    }

    // 2.4 向主线程发送初始化消息
    self.postMessage({
      type: 'info',
      text: 'Web Worker + OffscreenCanvas（高性能）'
    })

    // 2.5 记录初始化时间戳，启动 Worker 循环
    lastTime = performance.now();
    requestAnimationFrame(workerAnimationLoop);
  } catch (err) {
    console.error('Worker 初始化失败：', err)
  }
}

// 3. 处理窗口大小调整
function handleResize(data) {
  canvasConfig.width = data.width;
  canvasConfig.height = data.height;
  canvasConfig.dpr = data.dpr;

  // 更新球体画布边界
  ball.x = Math.min(ball.x, data.width - ball.r);
  ball.y = Math.min(ball.y, data.height - ball.r);
  ball.x = Math.max(ball.r, ball.x);
  ball.y = Math.max(ball.r, ball.y);
}

// 4. 处理速度更新
function handleSpeedUpdate(newSpeed) {
  if (ball) {
    // 保留速度方向，更新速度大小
    ball.vx = Math.sign(ball.vx) * 200 * newSpeed;
    ball.vy = Math.sign(ball.vy) * 150 * newSpeed;
  }
}

// 5. Worker 线程动画循环（核心）
function workerAnimationLoop(now) {
  if (!running) {
    return;
  }

  // 5.1 计算帧间隔时间
  const dt = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;

  // 5.2 清除离屏画布
  offscreenCtx.clearRect(0, 0, canvasConfig.width, canvasConfig.height);

  // 5.3 更新球体位置
  ball.x += ball.vx * dt;
  ball.y += ball.vy * dt;

  // 5.4 边界反弹检测
  // 左右边界
  if (ball.x - ball.r < 0) {
    ball.x = ball.r;
    ball.vx *= -1;
  }
  if (ball.x + ball.r > canvasConfig.width) {
    ball.x = canvasConfig.width - ball.r;
    ball.vx *= -1
  }
  // 上下边界
  if (ball.y - ball.r < 0) {
    ball.y = ball.r;
    ball.vy *= -1;
  }
  if (ball.y + ball.r > canvasConfig.height) {
    ball.y = canvasConfig.height - ball.r;
    ball.vy *= -1;
  }

  // 5.5 绘制球体（与主线程绘制逻辑一致）
  offscreenCtx.beginPath();
  const gradient = offscreenCtx.createRadialGradient(
    ball.x - ball.r * 0.3, // 开始圆形的 x 轴坐标
    ball.y - ball.r * 0.3, // 开始圆形的 y 轴坐标
    ball.r * 0.1,// 开始圆形的半径
    ball.x,
    ball.y,
    ball.r // 结束圆形的半径
  );
  gradient.addColorStop(0, '#fff7a8');
  gradient.addColorStop(0.5, '#ff8a65');
  gradient.addColorStop(1, '#d84315');
  offscreenCtx.fillStyle = gradient;
  offscreenCtx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  offscreenCtx.fill();

  // 5.6 递归调用，维持 Worker 动画循环
  requestAnimationFrame(workerAnimationLoop);
}