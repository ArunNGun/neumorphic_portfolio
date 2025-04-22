/**
 * Utility functions for performance optimization
 */

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation.
 * 
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the provided function
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T, 
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Generates a grid template string for expanding cards
 * 
 * @param totalItems - Total number of items in the grid
 * @param activeIndex - Index of the currently active item
 * @returns A string representing the grid template (columns or rows)
 */
export const generateGridTemplate = (totalItems: number, activeIndex: number): string => {
  return new Array(totalItems)
    .fill('')
    .map((_, i) => (i === activeIndex ? '10fr' : '1fr'))
    .join(' ');
};

/**
 * Determines if the current viewport is mobile-sized
 * 
 * @param mobileBreakpoint - The width threshold for mobile devices in pixels
 * @returns Boolean indicating if the viewport is mobile-sized
 */
export const isMobileViewport = (mobileBreakpoint = 480): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= mobileBreakpoint;
};