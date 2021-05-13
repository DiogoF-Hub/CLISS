let images = ["dog.png", "cat.png", "fish.png", "horse.png"]

function imageclicked(){
    let mydogimg = document.createElement("img");
    mydogimg.src = "dog.png";
    mydogimg.alt = "dog";
    mydogimg.classList.add("img");
    document.getElementById("divcat").innerHTML = " ";
    document.getElementById("divcat").append(mydogimg);

    setTimeout(putimageback, 4000)
}

function putimageback(){
    let backcardimg = document.createElement("img");
    backcardimg.src = "backcard.png";
    backcardimg.alt = "backcard";
    backcardimg.classList.add("img");
    backcardimg.addEventListener("click", imageclicked);
    
    document.getElementById("divcat").innerHTML = " ";

    document.getElementById("divcat").append(backcardimg);
}

//let mycatimg = document.createElement("img");
//mycatimg.src = "cat.png";
//mycatimg.alt = "cat";
//mycatimg.addEventListener("click", imageclicked)