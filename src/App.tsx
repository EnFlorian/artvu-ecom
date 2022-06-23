import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthModal, Footer, Navbar } from "./components";
import { About, Home, NotFound, Product, Products } from "./pages";

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
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <AuthModal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
