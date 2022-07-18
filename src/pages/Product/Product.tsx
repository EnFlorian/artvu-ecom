import { Link, useParams } from "react-router-dom";
import "./Product.scss";
import { IoIosArrowBack } from "react-icons/io";
import { QuantityButtons } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { IProduct } from "../../types/state";

const Product = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const { id } = useParams();
  let product;
  if (id) product = products?.find((product) => product.id === +id) as IProduct;

  const additionalImages = product?.additionalImages
    ?.map((image, idx) => (
      <li key={idx}>
        <img className="product__image-small" src={image} alt="Product" />
      </li>
    ))
    .slice(0, 5);

  return (
    <article className="product">
      <div className="product__wrapper container">
        <Link className="product__back-link" to="/products">
          <IoIosArrowBack /> Back to products
        </Link>
        <div className="product__content">
          <section className="product__left-content">
            <img className="product__image" src={product?.image} alt="" />
            <ul className="product__more-images">{additionalImages}</ul>
          </section>
          <section className="product__right-content">
            <h1 className="product__title">Product Title</h1>
            <p className="product__price">${product?.price}</p>
            <p className="product__description">{product?.description}</p>
            <div className="product__details">
              <div className="product__details-item">
                <p className="product__details-item-title">Stock:</p>
                <p className="product__details-item-value">{product?.stock}</p>
              </div>
              <div className="product__details-item">
                <p className="product__details-item-title">Artist:</p>
                <p className="product__details-item-value">{product?.creator}</p>
              </div>
              <div className="product__details-item">
                <p className="product__details-item-title">Category:</p>
                <p className="product__details-item-value">{product?.category}</p>
              </div>
              <div className="product__details-item">
                <p className="product__details-item-title">Online Ordering:</p>
                <p className="product__details-item-value">{product?.onlineOrdering ? "Available" : "Not Available"}</p>
              </div>
            </div>
            {product && id && <QuantityButtons {...product} />}

            <button className="product__add-btn">Add to cart</button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Product;
