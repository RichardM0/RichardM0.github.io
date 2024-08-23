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
    const certImage = document.getElementById("certificate-image")
    const header = document.getElementById('cert-header')
    const desc = document.getElementById('cert-desc')
    if (cert=="cayley") {
        header.innerText = "Cayley Contest";
        desc.innerText = "A mathematics competition hosted by the University of Waterloo for mostly grade 10s. It takes place each year around the end of February."
        certImage.src="./images/EduTDMain.png"
    }
    else if (cert=="csmc") {
        header.innerText = "Canadian Senior Mathematics Contest";
        desc.innerText = "A mathematics competition hosted by the University of Waterloo for mostly grade 11s and 12s. It takes place each year around the middle of November."
        certImage.src="./images/EduTDLevel.png"
    }
    else if (cert=="fermat") {
        document.getElementById('message').innerText = "fermat";
        certImage.src="./images/EduTDGame.png"
    }
    else if (cert=="sfu") {
        document.getElementById('message').innerText = "sfu";
        certImage.src="./images/gvsscoding.png"
    }
    else if (cert=="l2l") {
        document.getElementById('message').innerText = "l2l";
        certImage.src="./images/l2l.png"
    }

};