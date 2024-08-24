let curIndex = 0;
const imgSrc = [
    "./images/EduTDMain.png",
    "./images/EduTDLevel.png",
    "./images/EduTDGame.png"
];

function animateNext(){
    const activeImage = document.getElementById("carousel-img");
    activeImage.style.transform = "translateX(100%)";
}

function animatePrev(){
    const activeImage = document.getElementById("carousel-img");
    activeImage.style.transform = "translateX(-100%)";
}

function nextImage() {
    animateNext();
    const activeImage = document.getElementById("carousel-img");
    let activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    curIndex++;
    activeDot.classList.remove("active");
    activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    activeDot.classList.add("active");
    setTimeout(() => {
        activeImage.style.transform = "translateX(0%)";
        activeImage.src = imgSrc[curIndex%imgSrc.length];
    }, 600);
}

function prevImage() {
    animatePrev();
    const activeImage = document.getElementById("carousel-img");
    let activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    if(curIndex==0){
        curIndex = 2;
    }
    else{
        curIndex--;
    }
    activeDot.classList.remove("active");
    activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    activeDot.classList.add("active");
    setTimeout(() => {
        activeImage.style.transform = "translateX(0%)";
        activeImage.src = imgSrc[curIndex%imgSrc.length];
    }, 600);
}


document.addEventListener('DOMContentLoaded', function() {
    const activeImage = document.getElementById("carousel-img");
    activeImage.src = imgSrc[0];
    const activeDot = document.getElementById("dot1")
    activeDot.classList.add("active");
});