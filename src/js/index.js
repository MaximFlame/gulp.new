// Мобильная навигация!!!
//import mobileNav from './modules/mobile-nav.js'
//mobileNav();

// import Swiper JS

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

/*
import { easepick, TimePlugin } from "@easepick/bundle";

const picker = new easepick.create({
  element: document.getElementById("datePicket"),
  css: [
    "https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css",
    "https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css",
  ],
  format: "HH:mm, DD/MM/YY",
  plugins: [TimePlugin],
});
*/
