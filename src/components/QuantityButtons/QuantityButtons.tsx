import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../state/CartSlice";
import { RootState } from "../../state/store";
import { IProduct } from "../../types/state";
import "./QuantityButtons.scss";

const QuantityButtons = (product: IProduct) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const item = items.find((item) => item.item.id === product.id);
  const dispatch = useDispatch();

  return (
    <section className="quantity-buttons">
      <FaPlus className="quantity-buttons__icon" onClick={() => dispatch(addToCart({ item: product, quantity: 1 }))} />
      <p className="quantity-buttons__value">{item?.quantity || 0}</p>
      <FaMinus
        className="quantity-buttons__icon"
        onClick={() => dispatch(removeFromCart({ item: product, quantity: 1 }))}
      />
    </section>
  );
};

export default QuantityButtons;
