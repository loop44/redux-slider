import Slide from './Slide';

import { useSelector } from 'react-redux';

const SlidesList = () => {
  const { slideNumber, slides } = useSelector(({ slider }) => slider);

  return (
    <div className="slide-list" style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {slides.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
};

export default SlidesList;
