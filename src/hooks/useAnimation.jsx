import { useEffect, useState } from 'react';
import useWindowResize from './useWindowResize';

const useAnimation = ref => {
  const { width } = useWindowResize();

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: width >= 1440 ? 0.2 : 0 }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting, ref, width]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add('active');
      if (ref.current.querySelector('img')) {
        ref.current.querySelector('img').classList.add('active');
      }
    }
  }, [isIntersecting, ref]);
};
export default useAnimation;
