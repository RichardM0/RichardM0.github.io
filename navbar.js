function navbarResize() {
    var x = document.getElementById("mytop-navbar-right");
    var i = document.getElementById("icon-symbol");
    var c = document.getElementById("icon-toggle");

    if (x.className === "mynavbar-sect mynavbar-right") {
        var collection = document.getElementsByClassName("mynavbar-right-link");
        var items = Array.prototype.slice.call( collection, 0 );
        x.className = "myvertical-navbar";
        document.getElementById("RM-logo").style.visibility = "hidden";
        x.style.height = "100%";
        i.className = "fa fa-angle-up";
        i.style.margin = "1% 2% 0 0";
        c.style.display = "flex";
        c.style.justifyContent = "center";
        for(let i=0; i<items.length; i++){
            /*items[i].style.visibility = "visible";
            items[i].pointerEvents = "auto"; */
            items[i].className = "mynavbar-right-link-vert"
        }
      
    } else {
        var collection = document.getElementsByClassName("mynavbar-right-link-vert");
        var items = Array.prototype.slice.call( collection, 0 );
        document.getElementById("RM-logo").style.visibility = "visible";
        x.className = "mynavbar-sect mynavbar-right";
        i.className = "fa fa-bars";
        c.style.display = "block";
        for(let i=0; i<items.length; i++){
            console.log(items[i]);
            /*items[i].style.visibility = "hidden";
            items[i].pointerEvents = "none";  */
            items[i].className = "mynavbar-item mynavbar-right-link"
        }
    }
}
