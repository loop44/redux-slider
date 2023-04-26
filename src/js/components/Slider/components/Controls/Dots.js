import Dot from './Dot';

import { useSelector } from 'react-redux';

const Dots = () => {
  const { slidesCount } = useSelector(({ slider }) => slider);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
};

export default Dots;
