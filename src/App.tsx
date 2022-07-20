import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthModal, Footer, MobileNavbar, Navbar } from "./components";
import { About, Cart, Home, NotFound, Product, Products } from "./pages";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { Fragment } from "react";

function App() {
  const isMobileNavOpen = useSelector((state: RootState) => state.ui.isMobileNavOpen);
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <AuthModal />
        {isMobileNavOpen && <MobileNavbar />}
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
