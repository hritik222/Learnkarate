// Making Navigation fixed 
window.addEventListener("scroll", function () {
    var mynav = document.getElementById("navbackground");

    mynav.classList.toggle("sticky", window.scrollY > 0);
})


//Preloader
let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})


// Reponsive Navigation

function menuclick() {

    var topNav = document.getElementById("respNav");
    if (topNav.style.height === "55px") {
        topNav.style.height = "139px";
    } else {
        topNav.style.height = "55px";
    }
}
 // function toggle() {
    // 	document.getElementById('toggleslide').style.height = "240px"
    // }