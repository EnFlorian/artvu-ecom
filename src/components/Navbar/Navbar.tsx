import "./Navbar.scss";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">Artvu</NavLink>
        </h1>
        <ul className="navbar__navlinks navbar__main-links">
          <li className="navbar__navlink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar__navlink">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar__navlink ">
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
        <ul className="navbar__navlinks">
          <li className="navbar__navlink">
            <button className="navbar__btn" onClick={() => dispatch(openModal())}>
              Login
            </button>
          </li>
          <li>
            <NavLink to="/cart" className="navbar__navlink">
              Cart
              <div className="navbar__shopping-cart-wrapper">
                <FaShoppingCart className="navbar__shopping-cart" />
                <p className="navbar__shopping-cart-count">{items.length}</p>
              </div>
            </NavLink>
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
