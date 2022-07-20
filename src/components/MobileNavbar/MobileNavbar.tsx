import "./MobileNavbar.scss";
import { IoClose } from "react-icons/io5";
import { closeMobileNav } from "../../state/UiSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="mobile-navbar" onClick={() => dispatch(closeMobileNav())}>
      <IoClose className="mobile-navbar__closeIcon" onClick={() => dispatch(closeMobileNav())} />
      <ul className="mobile-navbar__links">
        <li className="mobile-navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="mobile-navbar__link">
          <Link to="/about">About</Link>
        </li>
        <li className="mobile-navbar__link">
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
