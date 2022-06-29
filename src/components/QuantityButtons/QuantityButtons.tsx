import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../../state/contexts/cartContext";
import "./QuantityButtons.scss";

const QuantityButtons = ({ product }: any) => {
  const { addToCart, removeFromCart, cart } = useCartContext();
  return (
    <section className="quantity-buttons">
      <FaPlus className="quantity-buttons__icon" onClick={() => addToCart(product)} />
      <p className="quantity-buttons__value">5</p>
      <FaMinus className="quantity-buttons__icon" onClick={() => removeFromCart(product)} />
    </section>
  );
};

export default QuantityButtons;
