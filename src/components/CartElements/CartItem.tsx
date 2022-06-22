import "./CartItem.scss";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ id, name, price, image, amount }: any) => {
  return (
    <div>
      {" "}
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{price}</h5>
        </div>
      </div>
      <h5 className="price">{price}</h5>
      <h5 className="subtotal">{amount * price}</h5>
      <button className="remove-btn">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
