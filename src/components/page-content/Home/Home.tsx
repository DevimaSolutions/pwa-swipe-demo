import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';

import Card from '@/components/Card';
import Slider from '@/components/Slider';

import type { Swiper } from 'swiper';

const getDefaultSlides = (
  onRemove: (idx: number) => (swiper: Swiper) => void,
  onOpenDetails: (idx: number) => (swiper: Swiper) => void,
) =>
  Array.from({ length: 10 }).map((_, i) => (
    <Card key={i} onRemove={onRemove(i)} onOpenDetails={onOpenDetails(i)}>
      Card {i}
    </Card>
  ));

const HomePage = () => {
  const router = useRouter();
  const swiper = useRef<Swiper>();

  const onRemove = useCallback(
    (val: number) => () => {
      if (!swiper.current) {
        return;
      }
      swiper.current.slides.forEach((elem, idx) => {
        if (elem.textContent === `Card ${val}`) {
          const removeSlide = () => {
            elem.remove();
            swiper.current?.update();
          };

          const isLastSlide = idx === (swiper.current?.slides?.length || 0) - 1;
          if (isLastSlide) {
            swiper.current?.slidePrev();
            setTimeout(removeSlide, 300);
          } else {
            removeSlide();
          }
        }
      });
    },
    [],
  );
  const onOpenDetails = useCallback(
    (val: number) => () => {
      swiper.current?.disable();
      router.push(`/${val}`);
    },
    [router],
  );

  const slides = useRef(getDefaultSlides(onRemove, onOpenDetails));

  return (
    <Slider
      sx={{
        '& > .swiper > .swiper-wrapper > .swiper-slide': {
          transition: 'height 0.5s ease, transform 0.5s ease, opacity 0.5s ease',
        },
      }}
      on={{
        afterInit: (instance) => {
          swiper.current = instance;
        },
      }}
      slides={slides.current}
      direction="vertical"
      spaceBetween={30}
      mousewheel={true}
      slidesPerView="auto"
    />
  );
};

export default HomePage;
