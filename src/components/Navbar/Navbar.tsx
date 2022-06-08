import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <Link to="/">Artvu</Link>
        </h1>
        <ul className="navbar__navlinks">
          <li className="navbar__navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__navlink">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__navlink">
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <ul className="navbar__navlinks">
          <li className="navbar__navlink">
            Cart
            <FaShoppingCart className="navbar__shopping-cart" />
          </li>
          <li className="navbar__navlink">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
