
function modify(){
   // alert("Hello world");
    var textAreaObject = document.getElementById("text-area");
    var fontSize = window.getComputedStyle(textAreaObject, null).getPropertyValue("font-size");
    //alert(fontSize);
    textAreaObject.style.fontSize = parseFloat(fontSize) + 2 + "px";
}
function pigLatin() {
    var textAreaObject = document.getElementById("text-area");
    obj = textAreaObject;
    var text = obj.value;

    var piglatin;
    var ch =text.charAt(0);
    if(ch =='a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'v'){
        obj.value = text+ "way";
    }
    else
       for(var i=1; i< text.length; i++){
            if(text.charAt(i) =='a' || text.charAt(i) == 'e' || text.charAt(i) == 'i' || text.charAt(i) == 'o' || text.charAt(i) == 'v') {

               // piglatin = text.substring(i, text.length) + text.substring(0, i) + "ay";
                obj.value = text.substring(i, text.length) + text.substring(0, i) + "ay";
                break;
            }
       }

}
function modifycheckbox() {
    var textAreaObject = document.getElementById("text-area");
    var checkboxObject = document.getElementById("checkbox");
    if(checkboxObject.checked) {
        textAreaObject.style.fontWeight = "bold";
        textAreaObject.style.color = "green";
        textAreaObject.style.textDecoration = "underline"
    var bodyObj = document.getElementById("body");
        bodyObj.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
    }
    else
        textAreaObject.style.fontWeight = "normal";
}

var timerId;
function timer() {
    if(!timerId){
        timerId = setInterval(modify, 500);
    }
    else {
        clearInterval(timerId);
        timerId = null;
    }
}