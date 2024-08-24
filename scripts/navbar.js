function navbarResize() {
    var x = document.getElementById("mytop-navbar-right");
    var i = document.getElementById("icon-symbol");
    var c = document.getElementById("icon-toggle");
    var mainContent = document.querySelector("main");
    var footer = document.querySelector("footer");

    if (x.className === "mynavbar-sect mynavbar-right") {
        var collection = document.getElementsByClassName("mynavbar-right-link");
        var items = Array.prototype.slice.call( collection, 0 );
        var ec = document.getElementById("ec");
        var n = document.getElementById('brush-nav');
        var n2 = document.getElementById('index-nav');
        if(n){
            n.style.background="black";
        }
        if(n2){
            n2.style.background="black";
        }
        mainContent.style.display = "none";
        footer.style.display = "none";
        x.className = "myvertical-navbar";
        document.getElementById("RM-logo").style.visibility = "hidden";
        ec.innerText = "EC Activity";
        x.style.height = "max-content";
        x.style.zIndex="1000";
        x.style.marginTop = "0";
        i.className = "fa fa-angle-up";
        i.style.margin = "1% 2% 0 0";
        i.style.fontSize = "5rem";
        c.style.display = "flex";
        c.style.justifyContent = "center";
        for(let i=0; i<items.length; i++){
            if(items[i].classList.contains("navbar-icon")){
                continue;
            }
            items[i].className = "mynavbar-right-link-vert"
        }
      
    } else {
        var collection = document.getElementsByClassName("mynavbar-right-link-vert");
        var items = Array.prototype.slice.call( collection, 0 );
        var ec = document.getElementById("ec");
        var n = document.getElementById('brush-nav');
        var n2 = document.getElementById('index-nav');
        if(n){
            n.style.background="linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(250,218,221,1))";
        }
        if(n2){
            n2.style.background="linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))";
        }
        mainContent.style.display = "block";
        footer.style.display = "block";
        document.getElementById("RM-logo").style.visibility = "visible";
        ec.innerText = "Extracurriculars";
        x.className = "mynavbar-sect mynavbar-right";
        x.style.height = "0";
        x.style.marginTop = "10vh";
        i.className = "fa fa-bars";
        c.style.display = "block";
        for(let i=0; i<items.length; i++){
            items[i].className = "mynavbar-item mynavbar-right-link"
        }
    }
}
