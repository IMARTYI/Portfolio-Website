import { useEffect } from "react";

export const useIntersectionObserver = (options = { threshold: 0.1 }) => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      }, options);
  
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  };