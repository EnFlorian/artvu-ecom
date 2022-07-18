import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../state/CartSlice";
import { IProduct } from "../../types/state";
import "./QuantityButtons.scss";

interface IQuantityButtonsProps {
  product: IProduct;
  quantity: number;
}

const QuantityButtons = ({ quantity, product }: IQuantityButtonsProps) => {
  console.log(quantity);
  const dispatch = useDispatch();

  return (
    <section className="quantity-buttons">
      <FaPlus className="quantity-buttons__icon" onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))} />
      <p className="quantity-buttons__value">{quantity}</p>
      <FaMinus
        className="quantity-buttons__icon"
        onClick={() => dispatch(removeFromCart({ item: product, quantity: 1 }))}
      />
    </section>
  );
};

export default QuantityButtons;
