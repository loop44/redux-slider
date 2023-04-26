import { Route, Routes } from 'react-router-dom';
import SliderPage from './js/pages/slider';
import MainPage from './js/pages/main';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/slider" element={<SliderPage />} />
  </Routes>
);

export default App;
