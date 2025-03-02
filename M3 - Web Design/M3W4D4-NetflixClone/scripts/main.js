const burgerMenu = document.querySelector(".burger-menu");
const asideBurgerMenu = document.querySelector(".aside-burger-menu");

burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("activeBurger");
    asideBurgerMenu.classList.toggle("show-aside-burger-menu");
})

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });