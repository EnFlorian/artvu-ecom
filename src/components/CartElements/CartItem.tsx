import "./CartItem.scss";
import { FaTrash } from "react-icons/fa";

interface ICartItemProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartItem = ({ quantity, name, price, image }: ICartItemProps) => {
  return (
    <div className="cart-item">
      <div className="cart-item__title">
        <img src={image} alt="product" />
        <div>
          <h5 className="cart-item__name">{name}</h5>
        </div>
      </div>
      <h5 className="cart-item__quantity">{quantity}</h5>
      <h5 className="cart-item__price">${price}</h5>
      <h5 className="cart-item__subtotal">{quantity * price}</h5>
      <button className="cart-item__remove-btn">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
