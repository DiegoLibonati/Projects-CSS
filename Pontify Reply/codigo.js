const btnOpenNav = document.getElementById("btnOpenNav");
const containerNav = document.querySelector(".nav_container_nav");


btnOpenNav.addEventListener("click", (e)=>{

    containerNav.classList.toggle("show-nav");

})