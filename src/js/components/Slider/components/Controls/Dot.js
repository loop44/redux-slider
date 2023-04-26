import { useDispatch, useSelector } from 'react-redux';

import { goToSlide } from '../../../../redux/actions';

const Dot = ({ number }) => {
  const dispatch = useDispatch();
  const { slideNumber } = useSelector(({ slider }) => slider);

  return (
    <div
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => dispatch(goToSlide(number))}
    />
  );
};

export default Dot;
