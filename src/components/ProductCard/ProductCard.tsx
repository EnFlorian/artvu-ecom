import { Link } from "react-router-dom";
import { IProduct } from "../../types/state";
import "./ProductCard.scss";

const ProductCard = ({ id, name, price, image }: IProduct) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <img className="product-card__image" src={image} alt="" />
        <div className="product-card__info">
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__price">{`$${price}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
