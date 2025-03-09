const burgerMenu = document.querySelector(".burger-menu");
const asideBurgerMenu = document.querySelector(".aside-burger-menu");
const overlay = document.querySelector(".overlay");

document.addEventListener("click", (e)=>{
    const isClickInsideAside = asideBurgerMenu.contains(e.target);
    const isClickInsideBurger = burgerMenu.contains(e.target);

    if (!isClickInsideBurger && !isClickInsideAside){
      burgerMenu.classList.remove("activeBurger");
      asideBurgerMenu.classList.remove("show-aside-burger-menu");
      overlay.classList.remove("active");
    } else {
      burgerMenu.classList.toggle("activeBurger");
      asideBurgerMenu.classList.toggle("show-aside-burger-menu");
      overlay.classList.toggle("active");
    }
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
