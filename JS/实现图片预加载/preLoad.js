// 创建 img 图片元素
const myImage = (function(){
  let imgNode = document.createElement('img')
  document.body.appendChild( imgNode )
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

/**
 * 预加载
 */
const preLoad = (function(){
  let img = new Image();
  img.onload = function() {
    myImage.setSrc( this.src )// this指向img
  }
  return {
    setImg: function(src) {
      myImage.setSrc('./img/loading.gif')
      img.src = src
    }
  }
})()

preLoad.setImg('./img/bg_gaoqing.jpeg')