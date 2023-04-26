import { Link } from 'react-router-dom';

const MainPage = () => (
  <div className="main-page">
    <h1>Welcome to main page</h1>
    <Link className="link" to="/slider">
      Go to slider page {'->'}
    </Link>
  </div>
);

export default MainPage;
