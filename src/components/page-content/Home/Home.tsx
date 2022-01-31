import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import Card from '@/components/Card';
import Slider from '@/components/Slider';

const HomePage = () => {
  const router = useRouter();
  const [slides, setSlides] = useState(Array.from({ length: 10 }).map((_, i) => i));

  const onRemove = useCallback(
    (val: number) => () => {
      console.log({ slides, val });
      setSlides((old) => old.filter((v) => v !== val));
    },
    [slides],
  );
  const onOpenDetails = useCallback(
    (val: number) => () => {
      router.push(`/${val}`);
    },
    [router],
  );

  return (
    <Slider
      sx={{
        '& > .swiper > .swiper-wrapper > .swiper-slide': {
          transition: 'height 0.5s ease, transform 0.5s ease, opacity 0.5s ease',
        },
      }}
      slides={slides.map((i) => (
        <Card key={i} onRemove={onRemove(i)} onOpenDetails={onOpenDetails(i)}>
          Card {i}
        </Card>
      ))}
      direction="vertical"
      spaceBetween={30}
      mousewheel={true}
      slidesPerView="auto"
    />
  );
};

export default HomePage;
