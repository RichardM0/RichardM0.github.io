/*let curIndex = 0;
const imgSrc = [
    "./images/EduTDMain.png",
    "./images/EduTDLevel.png",
    "./images/EduTDGame.png"
];

const headers = [
    "Certificate 1",
    "Certificate 2",
    "Certificate 3",
]

const descriptions = [
    "Certificate 1 desc",
    "Certificate 2 desc",
    "Certificate 3 desc",
]

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
    const activeHead = document.getElementById("certificate-header");
    const activeDesc = document.getElementById("certificate-desc");
    let activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    curIndex++;
    activeDot.classList.remove("active");
    activeDot = document.getElementById("dot".concat(((curIndex%imgSrc.length)+1).toString()));
    activeDot.classList.add("active");
    activeHead.innerHTML = headers[curIndex%headers.length];
    activeDesc.innerHTML = descriptions[curIndex%descriptions.length];
    setTimeout(() => {
        activeImage.style.transform = "translateX(0%)";
        activeImage.src = imgSrc[curIndex%imgSrc.length];
    }, 600);
}

function prevImage() {
    animatePrev();
    const activeImage = document.getElementById("carousel-img");
    const activeHead = document.getElementById("certificate-header");
    const activeDesc = document.getElementById("certificate-desc");
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
    activeHead.innerHTML = headers[curIndex%headers.length];
    activeDesc.innerHTML = descriptions[curIndex%descriptions.length];
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
});*/

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function() {
    const cert = getQueryParam('cert');
    if (cert=="cayley") {
        document.getElementById('message').innerText = "cayley";
    }
    else if (cert=="csmc") {
        document.getElementById('message').innerText = "canadian senior math contest";
    }
    else if (cert=="fermat") {
        document.getElementById('message').innerText = "fermat";
    }

};