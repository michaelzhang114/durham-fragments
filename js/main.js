var imgLength = 75;
var numColumns = 12;
var numRows = 8;


function appendToLayerOrdered(layerNum, walkNum) {
  for (var j = 1; j <= numRows; j++) {
    for (var i = 1; i <= numColumns; i++) {
      $("#layer" + layerNum).append("<img class='sub"+ layerNum + "x" + (i+(j-1)*numColumns) + "' src='resources/walk" + walkNum + "/img" + layerNum+ "/" + (i+(j-1)*numColumns) + ".PNG' height='"+ imgLength +"' width='"+ imgLength +"' style='position:absolute;top:"+ imgLength*(j-1) +"px;left:" + (i-1) * imgLength + "px'; />");
    }
  }
}

function changeOpacityOfLayer(layerNum) {
  // var element = document.getElementById('layer3');
  for (var i = 1; i <= (numRows * numColumns); i++) {
    var min=1.2;
    var max=5.0;
    var animationTime = Math.random() * (+max - +min) + +min;
    $("#layer" + layerNum +" img.sub" + layerNum + "x" + i).append("<style id='new-animations' type='text/css'> #layer"+layerNum+" img.sub"+ layerNum + "x" + i +" { animation-name: fade; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: "+ animationTime +"s; animation-direction: alternate;}</style>");
  }
}

function appendImageToLayerAndChangeOpacity(oldImageNum, layerNum) {
  console.log("changing images" + oldImageNum);
  //$("#layer" + layerNum).children("img.sub" + layerNum + "x" + oldImageNum).remove();
  //'resources/walk" + walkNum + "/img" + layerNum+ "/" + (i+(j-1)*numColumns) + ".PNG'
  $("#layer" + layerNum +" img.sub" + layerNum + "x" + oldImageNum).attr("src", "");
  $("#layer" + layerNum +" img.sub" + layerNum + "x" + oldImageNum).attr("src", "resources/walk" + 2 + "/img" + 1 +"/" +oldImageNum + ".PNG");
  //$("#layer" + layerNum +" img.sub" + layerNum + "x" + oldImageNum).append("<style id='new-animations' type='text/css'> #layer"+layerNum+" img.sub"+ layerNum + "x" + newImageNum +" { animation-name: fade; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: "+ animationTime +"s; animation-direction: alternate;}</style>");

}

function randomReplaceSquares(layerNum) {
  console.log("replacing");
  var arrayIndices = [];
  for (var i = 1; i <= (numRows * numColumns); i++) {
    arrayIndices.push(i);
  }
  shuffle(arrayIndices);

  (function myLoop (i) {
     setTimeout(function () {
        appendImageToLayerAndChangeOpacity(arrayIndices[i], layerNum, arrayIndices[i]);
        if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
     }, 1000)
  })(numRows * numColumns);
}






function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



window.onload = function(){
  var defaultImageNum = 2;
  //$("#layer0").append("<img class='orig1' src='resources/walk1/img" + defaultImageNum +"/full.png' height='"+ imgLength*numRows +"' width='"+ imgLength*numColumns + "' style='position:absolute;left:0px'; />");


  var walkNum = 1;
  appendToLayerOrdered(1, walkNum);



  // appendToLayerOrdered(2, walkNum);
  // appendToLayerOrdered(3, walkNum);


  // changeOpacityOfLayer(3);
  // changeOpacityOfLayer(2);
   changeOpacityOfLayer(1);


  //setTimeout(randomReplaceSquares(3), 3000);



};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var tmp_layer = 1;
    //randomReplaceSquares(tmp_layer)
    setTimeout(function(){randomReplaceSquares(tmp_layer)}, 3000);
});

