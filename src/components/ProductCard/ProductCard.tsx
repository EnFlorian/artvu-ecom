import { ProductType } from "../../types/product";
import "./ProductCard.scss";

const ProductCard = ({ name, price, image }: ProductType) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt="" />
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;