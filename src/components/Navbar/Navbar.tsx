import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { openModal } from "../../state/UiSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
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
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <ul className="navbar__navlinks">
          <li className="navbar__navlink">
            <button className="navbar__btn" onClick={() => dispatch(openModal())}>
              Login
            </button>
          </li>
          <li className="navbar__navlink">
            <Link to="/cart">Cart</Link>
            <div className="navbar__shopping-cart-wrapper">
              <FaShoppingCart className="navbar__shopping-cart"></FaShoppingCart>
              <p className="navbar__shopping-cart-count">itemAmount</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
