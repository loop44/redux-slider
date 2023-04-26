import SlideImage from './SlideImage';

const Slide = ({ data: { url, title } }) => (
  <div className="slide">
    <SlideImage src={url} alt={title} />
  </div>
);

export default Slide;
