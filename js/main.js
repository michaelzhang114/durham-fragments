var imgLength = 75;
var numColumns = 12;
var numRows = 8;
var numOfWalks = 3;
var numOfMasks = 3;
var SQUARE_TRANSITION_TIME = 30;
//var WALK_TRANSITION_TIME = 5000;
var currentWalkNum = 1;


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



function randomReplaceSquares() {
  console.log("replacing");
  var arrayIndices = [];
  for (var i = 1; i <= (numRows * numColumns); i++) {
    arrayIndices.push(i);
  }
  shuffle(arrayIndices);

  (function myLoop (i) {
     setTimeout(function () {
      if (--i) myLoop(i);
      if (i==parseInt((numRows*numColumns * (.25)))) {console.log("half");appendDefaultImage(currentWalkNum);}
      appendImageToLayerAndChangeOpacity(arrayIndices[i], currentWalkNum);
     }, SQUARE_TRANSITION_TIME)
  })(numRows * numColumns);

  //executeNextTransition();


}

function appendImageToLayerAndChangeOpacity(oldImageNum) {
  console.log("changing images" + oldImageNum + "walk" + currentWalkNum);
  for (var i = 1; i <= numOfMasks; i++) {
    $("#layer" + i +" img.sub" + i + "x" + oldImageNum).attr("src", "resources/walk" + currentWalkNum + "/img" + i +"/" + oldImageNum + ".PNG");
  }
}

function appendDefaultImage() {
  $("#layer0").append("<img id='newOrig' src='resources/walk" + currentWalkNum + "/img" + getRandomInt(1,numOfMasks) +"/full.png' height='"+ imgLength*numRows +"' width='"+ imgLength*numColumns + "' style='position:absolute;left:0px'; />");
  //$("#orig1").attr("src", "resources/walk" + currentWalkNum + "/img" + getRandomInt(1,numOfMasks) + "/full.png");
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



window.onload = function(){

  var walkNum = getRandomInt(1,numOfMasks);

  $("#layer0").append("<img id='orig1' src='resources/walk" + walkNum + "/img" + getRandomInt(1,numOfMasks) +"/full.png' height='"+ imgLength*numRows +"' width='"+ imgLength*numColumns + "' style='position:absolute;left:0px'; />");


  appendToLayerOrdered(1, walkNum);
  appendToLayerOrdered(2, walkNum);
  appendToLayerOrdered(3, walkNum);


  changeOpacityOfLayer(3);
  changeOpacityOfLayer(2);
  changeOpacityOfLayer(1);

};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    //var tmp_layer = 1;
    //randomReplaceSquares(tmp_layer)

    //executeNextTransition()



});

function executeNextTransition() {
  var nextWalkNum = getRandomInt(1,numOfWalks);
  while(nextWalkNum == currentWalkNum) {
    nextWalkNum = getRandomInt(1,numOfWalks);
  }
  currentWalkNum = nextWalkNum;
  console.log("next walk" + currentWalkNum);
  randomReplaceSquares(currentWalkNum);
  //doTransition(currentWalkNum);
}

// function doTransition() {
//   setTimeout(function(){
//     randomReplaceSquares(currentWalkNum);
//   }, WALK_TRANSITION_TIME);
// }

function stopAnimation() {
  console.log("stopping");
  for (var j = 1; j <= numOfMasks; j++) {
    for (var i = 1; i <= (numRows * numColumns); i++) {
      $("#layer" + j +" img.sub" + j + "x" + i).addClass("paused");
    }
  }
}











