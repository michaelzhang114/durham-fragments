var imgLength = 75;
var numColumns = 15;
var numRows = 10;


function appendToLayer(layerNum) {
  //<img src="/resources/img1/1.png"/>



  for (var j = 1; j <= numRows; j++) {
    for (var i = 1; i <= numColumns; i++) {
      $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+(j-1)*numColumns) + "' src='resources/img" + layerNum+ "/" + (i+(j-1)*numColumns) + ".PNG' height='"+ imgLength +"' width='"+ imgLength +"' style='position:absolute;top:"+ imgLength*(j-1) +"px;left:" + (i-1) * imgLength + "px'; />");
    }
  }


  // for (var i = 1; i <= numColumns; i++) {
  //   $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+6) + "' src='resources/img"+ layerNum+ "/" + (i+6) + ".PNG' height='"+ imgLength +"' width='"+ imgLength +"' style='position:absolute;top:"+ imgLength +"px;left:" + (i-1) * imgLength + "px'; />");
  // }
  // for (var i = 1; i <= numColumns; i++) {
  //   $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+12) + "' src='resources/img" + layerNum +"/" + (i+12) + ".PNG' height='"+ imgLength +"' width='"+ imgLength +"' style='position:absolute;top:"+ imgLength*2 +"px;left:" + (i-1) * imgLength + "px'; />");
  // }
  // for (var i = 1; i <= numColumns; i++) {
  //   $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+18) + "' src='resources/img" + layerNum +"/" + (i+18) + ".PNG' height='"+ imgLength +"' width='"+ imgLength +"' style='position:absolute;top:"+ imgLength*3 +"px;left:" + (i-1) * imgLength + "px'; />");
  // }
}

function changeOpacityOfLayer(layerNum) {
  // var element = document.getElementById('layer3');
  for (var i = 1; i <= (numRows * numColumns); i++) {
    var min=1.2;
    var max=5.0;
    var animationTime = Math.random() * (+max - +min) + +min;
    $("#layer" + layerNum +" img.sub" + layerNum + "x" + i).append("<style id='new-animations' type='text/css'> #layer"+layerNum+" img.sub"+ layerNum + "x" + i +" { animation-name: fade; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: "+ animationTime +"s; animation-direction: alternate;}</style>");
  }

  // element.innerHTML = "";

}



window.onload = function(){
  $("#layer0").append("<img class='orig1' src='resources/img" + 1 +"/full.png' height='"+ imgLength*numRows +"' width='"+ imgLength*numColumns + "' style='position:absolute;left:0px'; />");
  appendToLayer(1);
  appendToLayer(2);
  appendToLayer(3);


  changeOpacityOfLayer(3);
  changeOpacityOfLayer(2);
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

