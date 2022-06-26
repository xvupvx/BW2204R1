window.onload = function () {
    var menuBtn = document.getElementById("menuBtn");
    var sideNav = document.getElementById("sideNav");
    var menu = document.getElementById("menu");
    sideNav.style.right = "-250px";
    menu.onclick = function () {
        if (sideNav.style.right == "-250px") {
            sideNav.style.right = "0";
            menu.src = "img/close.png";
        } else {
            sideNav.style.right = "-250px";
            menu.src = "img/menu.png";
        }
    }

    // All animations will take exactly 500ms
    var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 150,
	speedAsDuration: true
});
};