let currentIndex = 0;
    const totalImages = 8;
    const imagesToShow = 4;

    function moveCarousel(direction) {
      const wrapper = document.querySelector('.carousel-wrapper');
      currentIndex += direction;

      // Prevent scrolling out of bounds
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex > totalImages - imagesToShow) {
        currentIndex = totalImages - imagesToShow;
      }

      // Calculate translateX based on the current index
      const translateX = -currentIndex * 25; // Each item is 25% wide
      wrapper.style.transform = `translateX(${translateX}%)`;
    }

    function toggleHeart(element) {
      element.classList.toggle('filled'); // Toggle the 'filled' class on the specific element
      element.innerHTML = element.classList.contains('filled') ? '&#9829;' : '&#9825;'; // Toggle between filled and empty heart symbol
    }
      



    document.querySelectorAll('.shop-btn, .order-btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });


    function filterProducts(category) {
      const products = document.querySelectorAll('.product-card');
      
      products.forEach(product => {
          if (category === 'all' || product.getAttribute('data-category') === category) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  }


  // Countdown Timer
function startCountdown(duration, display) {
  let timer = duration, hours, minutes, seconds;
  setInterval(function () {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + " : " + minutes + " : " + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  const duration = 60 * 60 * 10; // 10 hours in seconds
  const display = document.getElementById('countdown');
  startCountdown(duration, display);
};
