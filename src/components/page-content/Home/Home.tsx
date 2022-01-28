import { useMemo } from 'react';

import Card from '@/components/Card';
import Slider from '@/components/Slider';

const HomePage = () => {
  const slides = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => <Card key={i}>Slide {i}</Card>);
  }, []);

  return (
    <Slider
      slides={slides}
      direction="vertical"
      spaceBetween={30}
      mousewheel={true}
      slidesPerView="auto"
    />
  );
};

export default HomePage;
