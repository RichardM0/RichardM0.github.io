document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animated');

  function isInViewport(element, buffer = 30) {
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top + buffer < viewHeight &&
      rect.bottom - buffer > 0 &&
      rect.left + buffer < viewWidth &&
      rect.right - buffer > 0
    );
  }

  function handleScroll() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate-in');
      } else {
        element.classList.remove('animate-in');
      }
    });
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});