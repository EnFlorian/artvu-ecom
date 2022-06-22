import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import Product from "./pages/Product";
import AuthModal from "./components/Modal";

function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
        <AuthModal />
      </Router>
    </div>
  );
}

export default App;
