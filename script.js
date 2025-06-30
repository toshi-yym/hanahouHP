// Initialize AOS Library for scroll animations
// Goods Swiper init
new Swiper('.goods-swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: {
    el: '.goods-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.goods-swiper .swiper-button-next',
    prevEl: '.goods-swiper .swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Menu Swiper init
new Swiper('.menu-swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: {
    el: '.menu-swiper .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.menu-swiper .swiper-button-next',
    prevEl: '.menu-swiper .swiper-button-prev'
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Blog Swiper init
new Swiper('.blog-swiper',{slidesPerView:3,spaceBetween:16,loop:true,autoplay:{delay:4000},pagination:{el:'.blog-swiper .swiper-pagination',clickable:true},navigation:{nextEl:'.blog-swiper .swiper-button-next',prevEl:'.blog-swiper .swiper-button-prev'},breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}});

AOS.init({
  duration: 800,
  once: true
});

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
