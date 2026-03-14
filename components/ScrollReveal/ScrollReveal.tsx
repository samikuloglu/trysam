'use client';

import { useRef, useEffect, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  /** Observe this container and stagger direct children instead of animating self */
  staggerChildren?: number;
}

// Single shared IntersectionObserver
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, (entry: IntersectionObserverEntry) => void>();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb(entry);
            callbacks.delete(entry.target);
            sharedObserver?.unobserve(entry.target);
          }
        }
      }
    },
    { threshold: 0.1 }
  );
  return sharedObserver;
}

function revealElement(
  el: HTMLElement,
  delay: number,
  alreadyPast: boolean
) {
  if (alreadyPast) {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'translate(0,0)';
    el.style.willChange = 'auto';
  } else {
    el.style.transition = `opacity 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.5s cubic-bezier(0.4,0,0.2,1) ${delay}s`;
    // Force reflow so browser registers transition before property changes
    void el.offsetHeight;
    el.style.opacity = '1';
    el.style.transform = 'translate(0,0)';

    const onEnd = () => {
      el.style.willChange = 'auto';
      el.style.transition = 'none';
      el.removeEventListener('transitionend', onEnd);
    };
    el.addEventListener('transitionend', onEnd);

    // Fallback cleanup in case transitionend doesn't fire
    setTimeout(() => {
      el.style.willChange = 'auto';
      el.style.transition = 'none';
    }, (delay + 0.6) * 1000);
  }
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance,
  staggerChildren,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const d = distance ?? 24;
  const tx = direction === 'left' ? d : direction === 'right' ? -d : 0;
  const ty = direction === 'up' ? d : direction === 'down' ? -d : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (staggerChildren != null) {
      // Stagger mode: hide children, observe container once
      const kids = Array.from(el.children) as HTMLElement[];
      kids.forEach((kid) => {
        kid.style.opacity = '0';
        kid.style.transform = `translateY(${d}px)`;
        kid.style.willChange = 'transform, opacity';
      });

      const observer = getObserver();
      callbacks.set(el, (entry) => {
        const viewH = entry.rootBounds?.height ?? window.innerHeight;
        const past = entry.boundingClientRect.top < viewH * 0.4;
        kids.forEach((kid, i) => {
          revealElement(kid, past ? 0 : i * staggerChildren, past);
        });
      });
      observer.observe(el);

      return () => {
        callbacks.delete(el);
        observer.unobserve(el);
      };
    } else {
      // Single element mode
      el.style.opacity = '0';
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      el.style.willChange = 'transform, opacity';

      const observer = getObserver();
      callbacks.set(el, (entry) => {
        const viewH = entry.rootBounds?.height ?? window.innerHeight;
        const past = entry.boundingClientRect.top < viewH * 0.4;
        revealElement(el, past ? 0 : delay, past);
      });
      observer.observe(el);

      return () => {
        callbacks.delete(el);
        observer.unobserve(el);
      };
    }
  }, [tx, ty, delay, d, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
