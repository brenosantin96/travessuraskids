function toggleMenu() {

    let x = document.querySelector(".linksNavBar");
    let topnav = document.querySelector(".topnav");


    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flexDirection = "column"
        topnav.style.display = "block"
    } else {
        x.style.display = "none";
        topnav.style.display = "flex"
    }
}