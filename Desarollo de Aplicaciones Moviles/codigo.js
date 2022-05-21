const btnOpenNav = document.querySelector(".nav_container_logo button");
const btnCloseNav = document.querySelector(".nav_container_nav button");
const containerNav = document.querySelector(".nav_container_nav");
const containerNavOpacity = document.querySelector(".nav_container_nav_opacity");

const openNav = () => {

    containerNav.classList.add("show-nav");
    containerNavOpacity.classList.add("show-bg-opacity");
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";

}

const closeNav = () => {

    containerNav.classList.remove("show-nav");
    containerNavOpacity.classList.remove("show-bg-opacity")
    document.body.style.height = "";
    document.body.style.overflowY = "";
    
}

// Add event listeners
btnOpenNav.addEventListener("click", openNav);
btnCloseNav.addEventListener("click", closeNav);