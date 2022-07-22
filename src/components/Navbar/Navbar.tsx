import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { openModal, openMobileNav } from "../../state/UiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Navbar = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <Link to="/">Artvu</Link>
        </h1>
        <ul className="navbar__navlinks navbar__main-links">
          <li className="navbar__navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__navlink">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__navlink ">
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
              <p className="navbar__shopping-cart-count">{items.length}</p>
            </div>
          </li>
          <li className="navbar__navlink navbar__mobile-menu" onClick={() => dispatch(openMobileNav())}>
            <GiHamburgerMenu className="navbar__mobile-menu-btn" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
