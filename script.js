document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("header-carousel");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const interval = 5000; // Change slide every 5 seconds

    // Automatic slide change function
    function changeSlide() {
      const activeItem = carouselInner.querySelector(".carousel-item.active");
      const nextItem = activeItem.nextElementSibling || carouselInner.firstElementChild;

      activeItem.classList.remove("active");
      nextItem.classList.add("active");
    }

    setInterval(changeSlide, interval);
  });





  window.addEventListener('DOMContentLoaded', () => {
    const backgroundImageContainer = document.getElementById('background-image-container');
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) {
      backgroundImageContainer.style.backgroundImage = "url('path/to/your/small-screen-image.jpg')";
    } else {
      backgroundImageContainer.style.backgroundImage = "url('path/to/your/large-screen-image.jpg')";
    }
  });

 