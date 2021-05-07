const myImage = (function(){
  let imgNode = document.createElement('img')
  document.body.appendChild( imgNode )
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

const preLoad = (function(){
  let img = new Image();
  img.onload = function() {
    myImage.setSrc( this.src )// this指向img
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('./img/loading.gif')
      img.src = src
    }
  }
})()

preLoad.setSrc('./img/bg_gaoqing.jpeg')