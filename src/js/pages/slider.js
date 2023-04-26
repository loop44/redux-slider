import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { changeSliderMode } from '../redux/actions';

const SliderPage = () => {
  const { onlineMode } = useSelector(({ slider }) => slider);
  const dispatch = useDispatch();

  return (
    <div className="slider-page">
      <div className="slider-nav">
        <Link className="link" to="/">
          {'<-'} Go back
        </Link>
        <div className="switcher">
          <p
            onClick={() => dispatch(changeSliderMode(false))}
            className={onlineMode ? '' : 'active'}
          >
            Offline images
          </p>
          <p
            onClick={() => dispatch(changeSliderMode(true))}
            className={onlineMode ? 'active' : ''}
          >
            Online images
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default SliderPage;
