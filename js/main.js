var imgLength = 75;
var numColumns = 12;
var numRows = 8;
var numOfWalks = 3;
var numOfMasks = 3;
var SQUARE_TRANSITION_TIME = 500;
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



function randomReplaceSquares(nextWalkNum) {
  console.log("replacing");
  var arrayIndices = [];
  for (var i = 1; i <= (numRows * numColumns); i++) {
    arrayIndices.push(i);
  }
  shuffle(arrayIndices);

  (function myLoop (i) {
     setTimeout(function () {
      if (--i) myLoop(i);
      if (i==parseInt((numRows*numColumns * (.25)))) {console.log("half");appendDefaultImage(nextWalkNum);}
      appendImageToLayerAndChangeOpacity(arrayIndices[i], nextWalkNum);
     }, SQUARE_TRANSITION_TIME)
  })(numRows * numColumns);
}

function appendImageToLayerAndChangeOpacity(oldImageNum, nextWalkNum) {
  console.log("changing images" + oldImageNum + "walk" + nextWalkNum);
  for (var i = 1; i <= numOfMasks; i++) {
    $("#layer" + i +" img.sub" + i + "x" + oldImageNum).attr("src", "resources/walk" + nextWalkNum + "/img" + i +"/" + oldImageNum + ".PNG");
  }
}

function appendDefaultImage(walkNum) {
  $("#orig1").attr("src", "resources/walk" + walkNum + "/img" + 1 + "/full.png");
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
  var defaultImageNum = 2;
  $("#layer0").append("<img id='orig1' src='resources/walk1/img" + defaultImageNum +"/full.png' height='"+ imgLength*numRows +"' width='"+ imgLength*numColumns + "' style='position:absolute;left:0px'; />");


  var walkNum = 1;
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
    (function executeAction (i) {
      setTimeout(function () {
        var nextWalkNum = getRandomInt(1,numOfWalks);
        while(nextWalkNum == currentWalkNum) {
          nextWalkNum = getRandomInt(1,numOfWalks);
        }
        currentWalkNum = nextWalkNum;
        console.log("next walk" + currentWalkNum);
        if (--i) {console.log("iteration:" + i);  executeAction(i);}
        doTransition(currentWalkNum);
     }, numColumns * numRows * SQUARE_TRANSITION_TIME)
    })(10000);


});

function doTransition(nextWalkNum) {
  setTimeout(function(){
    randomReplaceSquares(nextWalkNum);
  }, 3000);
}

