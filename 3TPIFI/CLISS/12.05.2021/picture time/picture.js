let images = ["cat.png", "cat.png", "dog.png", "dog.png", "fish.png", "fish.png", "horse.png", "horse.png"];

let backcardimg = document.createElement("img");
    backcardimg.src = "backcard.png";
    backcardimg.alt = "backcard";
    backcardimg.classList.add("img");
    backcardimg.addEventListener("click", imageclicked);

function Start() {
    for(let i=0;i<images.length; i++){
        document.getElementById("").append(backcardimg);
    }
}


function imageclicked(){
    let mydogimg = document.createElement("img");
    mydogimg.src = "dog.png";
    mydogimg.alt = "dog";
    mydogimg.classList.add("img");
    document.getElementById("divAllCards").innerHTML = " ";
    document.getElementById("divAllCards").append(mydogimg);

    setTimeout(putimageback, 4000)
}

function putimageback(){
    
    document.getElementById("divAllCards").innerHTML = " ";

    document.getElementById("divAllCards").append(backcardimg);
}

//let mycatimg = document.createElement("img");
//mycatimg.src = "cat.png";
//mycatimg.alt = "cat";
//mycatimg.addEventListener("click", imageclicked)