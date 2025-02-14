// menu button toggle nav links and change icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  // toggle nav links and change icon
  navLinks.classList.toggle("open");

  // change icon
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// if nav links are clicked, close nav links and reset icon
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// scroll reveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// reveal header image
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

// reveal header content
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

// reveal header form
ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

// reveal about cards
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// reveal deals tabs
const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
  // get all tab contents
  const tabContents = document.querySelectorAll(
    ".deals__container .tab__content"
  );

  // toggle active class on tab buttons
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // toggle active class on tab content
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// reveal choose image
ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
// reveal choose content
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
// reveal choose cards
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

// reveal subscribe image
ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
// reveal subscribe content
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
// reveal subscribe form
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
