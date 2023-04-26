import { combineReducers } from 'redux';

import { sliderInitialState } from './initialState';
import {
  CHANGE_SLIDE,
  CHANGE_SLIDER_MODE,
  GO_TO_SLIDE,
  SET_SLIDES,
  SET_SLIDE_NUMBER
} from './actionTypes';

const slider = (state = sliderInitialState, action) => {
  switch (action.type) {
    case SET_SLIDES:
      return {
        ...state,
        slides: action.payload,
        slidesCount: action.payload.length
      };
    case SET_SLIDE_NUMBER:
      return {
        ...state,
        slideNumber: action.payload
      };
    case CHANGE_SLIDE:
      let slide = 0;

      if (state.slideNumber + action.payload < 0) {
        slide = state.slidesCount - 1;
      } else {
        slide = (state.slideNumber + action.payload) % state.slidesCount;
      }

      return {
        ...state,
        slideNumber: slide
      };
    case GO_TO_SLIDE:
      return {
        ...state,
        slideNumber: action.payload % state.slidesCount
      };
    case CHANGE_SLIDER_MODE:
      return {
        ...state,
        onlineMode: action.payload
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  slider
});

export default rootReducer;
