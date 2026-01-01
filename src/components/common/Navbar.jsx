import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="p-4 border border-gray-300 font-semibold">
      <div className="flex justify-between">
        <div>
          <Link to="/" className="text-xl">
           
            <h2>DINEZO</h2>{" "}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
