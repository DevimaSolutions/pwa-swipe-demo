import { useEffect, useRef } from 'react';
import Swiper, { Mousewheel } from 'swiper';

import type { ISliderOptions } from './types';

const useSlider = (options?: ISliderOptions) => {
  const sliderRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const swiper = new Swiper(sliderRef.current, {
      slidesPerView: 1,
      ...options,
      modules: options?.modules ?? [Mousewheel],
    });
    return () => {
      swiper.destroy();
    };
  }, [options]);

  return sliderRef;
};

export default useSlider;
