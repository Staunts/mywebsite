// Define animation utility functions

// Utility to check if an element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right >= 0
  );
};

// Reveal elements when scrolled into view
export const revealOnScroll = (): void => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animated');
    }
  });
};

// Add scroll event listener
export const initScrollAnimations = (): void => {
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  // Run once on page load
  revealOnScroll();
};

// Cleanup function
export const cleanupScrollAnimations = (): void => {
  window.removeEventListener('scroll', revealOnScroll);
};