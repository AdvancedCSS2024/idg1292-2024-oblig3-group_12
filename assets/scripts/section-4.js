document.addEventListener('DOMContentLoaded', function() {
  const fish = document.querySelector('.fish');
  const microplastics = document.querySelectorAll('.microplastic');

  function checkCollision() {
    microplastics.forEach(microplastic => {
      const fishRect = fish.getBoundingClientRect();
      const microRect = microplastic.getBoundingClientRect();

      if (fishRect.right > microRect.left &&
          fishRect.left < microRect.right &&
          fishRect.bottom > microRect.top &&
          fishRect.top < microRect.bottom) {
        if (microplastic.style.visibility !== 'hidden') { // Check if it's already hidden to avoid re-hiding
          microplastic.style.visibility = 'hidden';

          // Increase the timeout duration here
          setTimeout(() => {
            microplastic.style.visibility = 'visible'; // Restore visibility after 3 seconds, for example
          }, 3000); // Change this to any duration you prefer, here set to 3000 milliseconds (3 seconds)
        }
      }
    });
    requestAnimationFrame(checkCollision); // Continue the loop
  }

  requestAnimationFrame(checkCollision); // Start the collision detection loop
});
