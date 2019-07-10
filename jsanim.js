document.getElementById("start").onclick=function(){

}
document.getElementById("stop").onclick=function(){
    
}

function animationText() {
    var textAreaObj = document.getElementById("textArea");
    var choice = document.getElementById("anitype").value;   
    textAreaObj.value = ANIMATIONS[choice];
    textArray = (textAreaObj.value).split("=====\n");
}