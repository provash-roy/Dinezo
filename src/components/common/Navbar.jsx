
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <h2>DINEZO</h2>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
