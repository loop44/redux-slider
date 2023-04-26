/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getImages } from '../../../imagesApi';

import Arrows from './components/Controls/Arrows';
import Dots from './components/Controls/Dots';

import SlidesList from './components/SlidesList';
import { useDispatch, useSelector } from 'react-redux';
import { changeSlide, setSlideNumber, setSliderItems } from '../../redux/actions';

const STATIC_IMAGES = [
  { title: '', url: '/slider-images/1.jpg' },
  { title: '', url: '/slider-images/2.jpg' },
  { title: '', url: '/slider-images/3.jpg' },
  { title: '', url: '/slider-images/4.jpg' },
  { title: '', url: '/slider-images/5.jpg' }
];

const Slider = ({ width, height, autoPlay, autoPlayTime }) => {
  const dispatch = useDispatch();
  const { slidesCount, slideNumber, onlineMode } = useSelector(({ slider }) => slider);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    if (onlineMode) {
      const loadData = async () => {
        const images = await getImages();
        dispatch(setSliderItems(images));
      };
      loadData();
    } else {
      dispatch(setSliderItems(STATIC_IMAGES));
    }
    dispatch(setSlideNumber(0));
  }, [onlineMode]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      dispatch(changeSlide(1));
    }

    if (direction < -10) {
      dispatch(changeSlide(-1));
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      dispatch(changeSlide(1));
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [slidesCount, slideNumber]); // when images uploaded or slide changed manually we start timer

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Arrows />
      <SlidesList />
      <Dots />
    </div>
  );
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: '100%',
  height: '50%'
};

export default Slider;
