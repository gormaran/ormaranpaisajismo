/*******************************/
/*Gallery Carousel*/
/*******************************/
const galleryCarousel = document.querySelector(".gallery-carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const images = document.querySelectorAll(".carousel-wrapper img");
const imageWidth = images[0].offsetWidth + 20; // Include margin
const visibleImages = Math.floor(galleryCarousel.offsetWidth / imageWidth);

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselWrapper.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - visibleImages) {
    currentIndex++;
    carouselWrapper.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});

/*******************************/
/*Testimony Carousel*/
/*******************************/
const testimonyCarousel = document.querySelector(".testimony-carousel");
const testimonyPrevButton = document.querySelector(".testimony-prev-button");
const testimonyNextButton = document.querySelector(".testimony-next-button");
const testimonyCarouselWrapper = document.querySelector(
  ".testimony-carousel-wrapper"
);
const testimonies = document.querySelectorAll(".testimony-item");
const testimonyWidth = testimonies[0].offsetWidth + 60; // Include margin
const visibleTestimonies = Math.floor(
  testimonyCarousel.offsetWidth / testimonyWidth
);

let currentTestimonyIndex = 0;

testimonyPrevButton.addEventListener("click", () => {
  if (currentTestimonyIndex > 0) {
    currentTestimonyIndex--;
    testimonyCarouselWrapper.style.transform = `translateX(${
      -currentTestimonyIndex * testimonyWidth
    }px)`;
  }
});

testimonyNextButton.addEventListener("click", () => {
  if (currentTestimonyIndex < testimonies.length - visibleTestimonies) {
    currentTestimonyIndex++;
    testimonyCarouselWrapper.style.transform = `translateX(${
      -currentTestimonyIndex * testimonyWidth
    }px)`;
  }
});
