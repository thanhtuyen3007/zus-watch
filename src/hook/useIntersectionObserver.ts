import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Get the first entry
      setIsVisible(entry.isIntersecting);
    }, options);
    const currentElement = ref.current;
    // check currentElement có null(tồn tại) hay không
    if (currentElement) {
      observer.observe(currentElement); //kết nối observer với currentElement
    }
    // Clean up the observer on component unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ngắt kết nối observer với currentElement
      }
    };
  }, [ref, options]);
  return isVisible;
};
