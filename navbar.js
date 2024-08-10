function navbarResize() {
    var x = document.getElementById("mytop-navbar-right");
    var i = document.getElementById("icon-symbol");
    var c = document.getElementById("icon-toggle");

    if (x.className === "mynavbar-sect mynavbar-right") {
        var collection = document.getElementsByClassName("mynavbar-right-link");
        var items = Array.prototype.slice.call( collection, 0 );
        x.className = "myvertical-navbar";
        document.getElementById("RM-logo").style.visibility = "hidden";
        x.style.height = "100vh";
        x.style.marginTop = "0";
        i.className = "fa fa-angle-up";
        i.style.margin = "1% 2% 0 0";
        i.style.fontSize = "6rem";
        c.style.display = "flex";
        c.style.justifyContent = "center";
        for(let i=0; i<items.length; i++){
            items[i].className = "mynavbar-right-link-vert"
        }
      
    } else {
        var collection = document.getElementsByClassName("mynavbar-right-link-vert");
        var items = Array.prototype.slice.call( collection, 0 );
        document.getElementById("RM-logo").style.visibility = "visible";
        x.className = "mynavbar-sect mynavbar-right";
        x.style.height = "0";
        x.style.marginTop = "5%";
        i.className = "fa fa-bars";
        c.style.display = "block";
        for(let i=0; i<items.length; i++){
            console.log(items[i]);
            items[i].className = "mynavbar-item mynavbar-right-link"
        }
    }
}
