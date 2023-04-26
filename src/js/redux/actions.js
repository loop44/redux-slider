import {
  CHANGE_SLIDE,
  CHANGE_SLIDER_MODE,
  GO_TO_SLIDE,
  SET_SLIDES,
  SET_SLIDE_NUMBER
} from './actionTypes';

export const setSliderItems = (items) => ({
  type: SET_SLIDES,
  payload: items
});

export const setSlideNumber = (num) => ({
  type: SET_SLIDE_NUMBER,
  payload: num
});

export const changeSlide = (direction) => ({
  type: CHANGE_SLIDE,
  payload: direction
});

export const goToSlide = (num) => ({
  type: GO_TO_SLIDE,
  payload: num
});

export const changeSliderMode = (val) => ({
  type: CHANGE_SLIDER_MODE,
  payload: val
});
