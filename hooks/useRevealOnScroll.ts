'use client';

import { useEffect } from 'react';

export function useRevealOnScroll(selector = '.reveal') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('vis');
      }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(selector).forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selector]);
}
