import { Box } from '@mui/material';

import styles from './styles';
import useSlider from './useSlider';

import type { ISliderProps } from './types';

const Slider = ({ slides, ...options }: ISliderProps) => {
  const sliderRef = useSlider(options);

  return (
    <Box sx={[styles.defaultSliderContainer, styles.sliderContainer]}>
      <Box ref={sliderRef} className="swiper">
        <Box className="swiper-wrapper">
          {slides.map((slide) => (
            <Box key={slide.key} className="swiper-slide">
              {slide}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
