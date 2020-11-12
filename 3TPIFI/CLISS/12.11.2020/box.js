let number = 0
var currentcolorBox = "redBox"
function addBox(){
    if(currentcolorBox == "redBox"){
        currentcolorBox = "greenBox"
    }

    else
    if(currentcolorBox == "greenBox"){
        currentcolorBox = "blueBox"
    }

    else
    if(currentcolorBox =="blueBox"){
        currentcolorBox = "redBox"
    }

    number++;
    document.getElementById("bodyId").innerHTML += '<div class="box '+ currentcolorBox +'">'+ number +'</div>'
}