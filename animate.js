document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animated');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate-in');
      }
      else{
        element.classList.remove('animate-in')
      }
    });
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});
