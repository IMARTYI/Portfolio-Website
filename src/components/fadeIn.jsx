import { useEffect } from 'react';

export const useIntersectionObserver = (threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeSlideIn');
            entry.target.classList.remove('opacity-0', '-translate-y-10');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [threshold]);
};