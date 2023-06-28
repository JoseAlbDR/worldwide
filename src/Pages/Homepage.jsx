import Navigation from "../components/PageNav";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <Navigation />
      <h1 className="test">WorldWise</h1>
      <Link to="app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
