import "./CartItem.scss";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ id, name, price, image, amount }: any) => {
  return (
    <div className="cart-item">
      {" "}
      <div className="title">
        <img src="https://res.cloudinary.com/dymu62vtv/image/upload/v1654816632/art/0_lm6uzt.jpg" alt="Image" />
        <div>
          <h5 className="name">Spring Blossoms</h5>
          <h5 className="price-small">$299.99</h5>
        </div>
      </div>
      <h5 className="price">$299.999</h5>
      <h5 className="subtotal">50000</h5>
      <button className="remove-btn">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
