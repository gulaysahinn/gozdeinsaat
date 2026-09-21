import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.3 }) {
  const [isInView, setIsInView] = useState(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Trigger only once
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.rootMargin, isInView]);

  return [ref, isInView];
}
