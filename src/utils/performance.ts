// Performance optimization utilities

// Debounce function to limit function calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function to limit function execution rate
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Intersection Observer options for better performance
export const intersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
  triggerOnce: true,
};

// Reduced motion support
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Performance-aware animation duration
export const getAnimationDuration = (baseDuration: number): number => {
  if (prefersReducedMotion()) {
    return baseDuration * 0.5; // Reduce duration for users who prefer less motion
  }
  return baseDuration;
};

// Lazy load images
export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        observer.unobserve(img);
      }
    });
  });
  observer.observe(img);
};

// Optimize scroll events
export const optimizeScroll = (callback: () => void, delay: number = 16) => {
  let ticking = false;
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Memory management for animations
export class AnimationManager {
  private animations: Map<string, Animation> = new Map();

  addAnimation(id: string, animation: Animation) {
    this.animations.set(id, animation);
  }

  removeAnimation(id: string) {
    const animation = this.animations.get(id);
    if (animation) {
      animation.cancel();
      this.animations.delete(id);
    }
  }

  clearAllAnimations() {
    this.animations.forEach((animation) => animation.cancel());
    this.animations.clear();
  }
}

// Performance monitoring
export const performanceMonitor = {
  startTime: 0,
  
  start() {
    this.startTime = performance.now();
  },
  
  end(label: string) {
    const duration = performance.now() - this.startTime;
    if (process.env.NODE_ENV === 'development') {
      console.log(`${label}: ${duration.toFixed(2)}ms`);
    }
    return duration;
  }
};

// Optimize CSS animations
export const optimizeCSSAnimations = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      * {
        will-change: auto;
      }
      .animate-on-scroll {
        will-change: transform, opacity;
      }
      .animate-on-hover {
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
  }
};

// Disable animations for low-end devices
export const shouldDisableAnimations = (): boolean => {
  if (typeof navigator !== 'undefined') {
    // Check for low-end devices
    const memory = (navigator as any).deviceMemory;
    const cores = (navigator as any).hardwareConcurrency;
    
    if (memory && memory < 4) return true; // Less than 4GB RAM
    if (cores && cores < 4) return true;   // Less than 4 cores
    
    // Check for slow connection
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === 'slow-2g') return true;
  }
  return false;
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (shouldDisableAnimations()) {
    // Disable all animations for low-end devices
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
  }
  
  // Optimize CSS animations
  optimizeCSSAnimations();
  
  // Add performance class to body
  if (typeof document !== 'undefined') {
    document.body.classList.add('performance-optimized');
  }
};
