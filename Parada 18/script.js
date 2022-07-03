function myFunction() {
    var x = document.getElementById("menu-header");

    if (x.className === "nav-header") {
        x.className += " responsive";
    } else {
        x.className = "nav-header";
    }
}