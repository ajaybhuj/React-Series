import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-white text-2xl font-bold">
            <h1 className="text-4xl">GitHub Profile</h1>
          </NavLink>

          <div className="flex space-x-4">
            <NavLink to="" className="text-white">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white">
              Contact Us
            </NavLink>
            <NavLink to="/Profile" className="text-white">
              GitHub Profile
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
