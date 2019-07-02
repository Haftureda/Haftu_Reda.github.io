"use strict";
var indecies = ["Blank", "Custom", "Exercise", "Juggler", "Bike", "Dive"];
var pos = 0;
var timerId;
var textAreaObj;
var text;
var textArray;
var delay = 250;

window.onload = function(){
     textAreaObj = document.getElementById("textArea");
     text = textAreaObj.value;
     //textArray = text.split("=====\n");

    var textAreaValue = ANIMATIONS["Blank"] +
        ANIMATIONS["Custom"] +
        ANIMATIONS["Exercise"] +
        ANIMATIONS["Juggler"] +
        ANIMATIONS["Bike"] +
        ANIMATIONS["Dive"];
    textAreaObj.value = textAreaValue;
    textArray = (textAreaObj.value).split("=====\n");
}
function animationText() {
    var textAreaObj = document.getElementById("textArea");
    var fieldSetObj = document.getElementById("aniType");
    var  choice = fieldSetObj.value;
    textAreaObj.value = ANIMATIONS[choice];
    textArray = (textAreaObj.value).split("=====\n");
}

function setFontSize() {
    var obj = document.getElementById("textArea");
    var selectorObj = document.getElementById("fontsizeId");
    var fontSize = selectorObj.value;
    if(fontSize == "Tiny"){
        obj.style.fontSize = 7 + "pt";
    }
    if(fontSize == "Small"){
        obj.style.fontSize = 10 + "pt";
    }
    if(fontSize == "Medium"){
        obj.style.fontSize = 12 + "pt";
    }
    if(fontSize == "Large"){
        obj.style.fontSize = 16 + "pt";
    }
    if(fontSize == "Extra Large"){
        obj.style.fontSize = 24 + "pt";
    }
    if(fontSize == "XXL"){
        obj.style.fontSize = 32 + "pt";
    }

}



function animate() {   
    textAreaObj.value = textArray[pos];
    pos++;
    if(pos == textArray.length) {
        pos = 0;
    }
}

function animation() {
    if(!timerId){
        timerId = setInterval(animate, delay);
    }
}
function stopAnimation(){
    clearInterval(timerId);
    timerId = null;
}

function changeSpeed() {
    var checkboxObj = document.getElementById("speed-checkbox");
    var turbo = document.getElementById("speed-turbo");
    if(checkboxObj.checked){              
        delay = 50;
    }
}