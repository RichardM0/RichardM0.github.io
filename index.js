function myFunction() {
    var x = document.getElementById("top-navbar-right");
    var i = document.getElementById("icon-symbol");
    var c = document.getElementById("icon-toggle");
    var collection = document.getElementsByClassName("navbar-right-link");
    var items = Array.prototype.slice.call( collection, 0 );
    if (x.className === "navbar-sect navbar-right") {
        x.className = "vertical-navbar";
        i.className = "fa fa-angle-up";
        c.style.display = "flex";
        c.style.justifyContent = "center";
        for(let i=0; i<items.length; i++){
            console.log(items[i]);
            items[i].style.visibility = "visible";
            items[i].pointerEvents = "auto";
                
        }
      
    } else {
        x.className = "navbar-sect navbar-right";
        i.className = "fa fa-bars";
        c.style.display = "block";
        for(let i=0; i<items.length; i++){
            console.log(items[i]);
            if(window.innerWidth<720){
                items[i].style.visibility = "hidden";
                items[i].pointerEvents = "none";  
            }
        }
    }
}

console.log(window.innerWidth);