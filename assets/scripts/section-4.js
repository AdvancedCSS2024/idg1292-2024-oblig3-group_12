document.addEventListener('DOMContentLoaded', function() {
  const fish = document.querySelector('.fish');
  const microplastics = document.querySelectorAll('.microplastic');

  microplastics.forEach(microplastic => {
      const originalStyle = microplastic.style.cssText;

      function checkCollision() {
          const fishRect = fish.getBoundingClientRect();
          const microRect = microplastic.getBoundingClientRect();

          if (fishRect.right > microRect.left &&
              fishRect.left < microRect.right &&
              fishRect.bottom > microRect.top &&
              fishRect.top < microRect.bottom) {
              microplastic.style.visibility = 'hidden'; 

              setTimeout(() => {
                  microplastic.style.cssText = originalStyle; 
                  microplastic.style.visibility = 'visible'; 
              }, 1000);
          }
      }

      setInterval(checkCollision, 5300);
  });
});
