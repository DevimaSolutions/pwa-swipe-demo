import { Box } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';
import useSlider from './useSlider';

import type { ISliderProps } from './types';

const Slider = ({ slides, sx, ...options }: ISliderProps) => {
  const sliderRef = useSlider(options);

  return (
    <Box sx={combineSx([styles.defaultSliderContainer, styles.sliderContainer], sx)}>
      <Box ref={sliderRef} className="swiper">
        <Box className="swiper-wrapper">{slides}</Box>
      </Box>
    </Box>
  );
};

export default Slider;
