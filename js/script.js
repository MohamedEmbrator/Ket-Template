const scrollButton = document.querySelector(".scroll-button");
scrollButton.onclick = function () {
  window.scroll({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};
window.onscroll = function () {
  if (window.scrollY >= 150) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
const landing = document.querySelector(".landing");
const imgs = [
  "landing-01.jpg",
  "landing-02.jpg",
  "landing-03.jpg",
  "landing-04.jpg",
  "landing-05.jpg",
  "landing-06.jpg",
  "landing-07.jpg",
  "landing-08.jpg",
  "landing-09.jpg",
  "landing-10.jpg",
  "landing-11.jpg",
  "landing-12.jpg"
];
setInterval(function () {
  const randomNumber = Math.floor(Math.random() * imgs.length);
  landing.style.backgroundImage = `url("imgs/${imgs[randomNumber]}")`;
}, 5000);

const servicesButtons = document.querySelectorAll(
  "#services .tour .buttons button"
);
const firstButton = document.querySelector(
  "#services .tour .buttons button:first-child"
);
const secondButton = document.querySelector(
  "#services .tour .buttons button:last-child"
);
servicesButtons.forEach(function (el) {
  el.addEventListener("click", function () {
    servicesButtons.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
    if (firstButton.classList.contains("active")) {
      firstButton.style.borderRight = "2px solid var(--main-color)";
      secondButton.style.borderLeft = "none";
    } else if (secondButton.classList.contains("active")) {
      secondButton.style.borderLeft = "2px solid var(--main-color)";
      firstButton.style.borderRight = "none";
    }
  });
});
const shuffle = document.querySelectorAll(".shuffle ul li");
shuffle.forEach((el) => {
  el.onclick = function () {
    shuffle.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  };
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 3, // عرض 3 صور في نفس الوقت
    spaceBetween: 20, // المسافة بين الصور
    loop: true, // تشغيل السلايدر بشكل مستمر
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      390: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 }
    }
  });
});
document.querySelector("footer span:first-child").innerHTML = new Date().getFullYear();