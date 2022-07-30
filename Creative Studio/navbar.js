const btnOpenNav = document.querySelector(".fa-bars");
const navbar = document.querySelector(".header_container_nav");

const openNav = () => {
  navbar.classList.toggle("open-nav");

  navbar.classList.contains("open-nav")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};

btnOpenNav.addEventListener("click", openNav);
