import { Link } from "react-router-dom";
import "./Product.scss";

const Product = () => {
  return (
    <article className="product">
      <div className="product__wrapper">
        <Link className="product__back-link" to="/products">
          Back to products
        </Link>
        <section className="product__left-content">
          <img className="product__image" src="https://via.placeholder.com/300x300" alt="" />
          <div className="product__more-images">
            <img className="product__image" src="https://via.placeholder.com/300x300" alt="" />
            <img className="product__image" src="https://via.placeholder.com/300x300" alt="" />
            <img className="product__image" src="https://via.placeholder.com/300x300" alt="" />
          </div>
        </section>
        <section className="product__right-content">
          <h1 className="product__title">Product Title</h1>
          <p className="product__price">$100</p>
          <p className="product__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl eu nisl porta, euismod egestas
            nisl euismod.
          </p>
          <div className="product__details">
            <div className="product__details-item">
              <p className="product__details-item-title">Stock</p>
              <p className="product__details-item-value">10</p>
            </div>
            <div className="product__details-item">
              <p className="product__details-item-title">Artist</p>
              <p className="product__details-item-value">S</p>
            </div>
            <div className="product__details-item">
              <p className="product__details-item-title">Category</p>
              <p className="product__details-item-value">S</p>
            </div>
            <div className="product__details-item">
              <p className="product__details-item-title">Online Ordering</p>
              <p className="product__details-item-value">S</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Product;
