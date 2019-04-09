function appendToLayer(layerNum) {
  //<img src="/resources/img1/1.png"/>
  for (var i = 1; i <= 4; i++) {
    $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + i + "' src='resources/img" + layerNum+ "/" + i + ".png' height='256' width='256' style='position:absolute;left:" + (i-1) * 256+"px'; />");
  }
  for (var i = 1; i <= 4; i++) {
    $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+4) + "' src='resources/img"+ layerNum+ "/" + (i+4) + ".png' height='256' width='256' style='position:absolute;top:256px;left:" + (i-1) * 256+"px'; />");
  }
  for (var i = 1; i <= 4; i++) {
    $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+8) + "' src='resources/img" + layerNum +"/" + (i+8) + ".png' height='256' width='256' style='position:absolute;top:512px;left:" + (i-1) * 256+"px'; />");
  }
}

function changeOpacityOfLayer(layerNum) {
  // var element = document.getElementById('layer3');
  for (var i = 1; i <= 12; i++) {
    var min=2.0;
    var max=4.5;
    var animationTime = Math.random() * (+max - +min) + +min;
    $("#layer" + layerNum +" img.sub" + layerNum + "x" + i).append("<style id='new-animations' type='text/css'> #layer"+layerNum+" img.sub"+ layerNum + "x" + i +" { animation-name: fade; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: "+ animationTime +"s; animation-direction: alternate;}</style>");
  }

  // element.innerHTML = "";

}



window.onload = function(){
  $("#layer0").append("<img class='orig2' src='resources/img" + 2 +"/walk1." + 2 + "full.png' width='1024' height='768' style='position:absolute;left:0px'; />");
  appendToLayer(1);
  appendToLayer(2);
  appendToLayer(3);


  changeOpacityOfLayer(3);
  //changeOpacityOfLayer(2);
  changeOpacityOfLayer(1);
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // $('.container').infiniteScroll({
    //   // options
    //   path: '.pagination__next',
    //   append: '.post',
    //   history: false,
    // });
});

