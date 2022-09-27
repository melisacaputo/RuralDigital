function deslizarNav() {
  let burgerMenu = document.querySelector(".burger-bar");
  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      let navResponsive = document.querySelector(".nav__container");
      navResponsive.classList.toggle("show-nav");
    });
  }
}
function removerNav() {
  let link1 = document.querySelector(".nav__link");
  if (link1) {
    link1.addEventListener("click", () => {
      let navResponsive = document.querySelector(".nav__container");
      navResponsive.classList.remove("show-nav");
    });
  }
}
function carrusel() {
  const slider = document.querySelector(".container-clientes");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", (_) => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", (_) => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 1;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });
}

deslizarNav();
removerNav();
carrusel();
