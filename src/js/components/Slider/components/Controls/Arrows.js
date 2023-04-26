import { useDispatch } from 'react-redux';
import { changeSlide } from '../../../../redux/actions';

const Arrows = () => {
  const dispatch = useDispatch();

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => dispatch(changeSlide(-1))} />
      <div className="arrow right" onClick={() => dispatch(changeSlide(1))} />
    </div>
  );
};

export default Arrows;
