const btnOpenNav = document.getElementById("btnOpen");
const btnCloseNav = document.getElementById("btnClose");
const navContainer = document.querySelector(".header_container-nav");

btnOpenNav.addEventListener("click", ()=>{

    navContainer.classList.add("show-nav");
    btnOpenNav.classList.add("noshow-btn");
    btnCloseNav.style.display = "block";

});

btnCloseNav.addEventListener("click", ()=>{

    navContainer.classList.remove("show-nav");
    btnOpenNav.classList.remove("noshow-btn");
    btnCloseNav.style.display = "none";

});