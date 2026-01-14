import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-3xl">🍽️</div>
            <h2 className="text-2xl font-bold gradient-text">DINEZO</h2>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`font-semibold transition-all duration-300 relative ${isActive('/')
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
                }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></span>
              )}
            </Link>

            <Link
              to="/explore"
              className={`font-semibold transition-all duration-300 relative ${isActive('/explore')
                  ? 'text-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
                }`}
            >
              Explore
              {isActive('/explore') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></span>
              )}
            </Link>

            <Link
              to="/login"
              className="btn-primary text-sm"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

