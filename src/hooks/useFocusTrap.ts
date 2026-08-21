import { useEffect, type RefObject } from 'react';

export const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
  onClose: () => void,
  triggerRef?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    
    // Trap focus logic
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Focus first element on mount
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
      
      // Return focus to trigger
      if (triggerRef?.current) {
        triggerRef.current.focus();
      }
    };
  }, [isActive, onClose, ref, triggerRef]);
};
