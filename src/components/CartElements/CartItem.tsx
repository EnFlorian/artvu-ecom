import "./CartItem.scss";
import { FaTrash } from "react-icons/fa";
import QuantityButtons from "../QuantityButtons/QuantityButtons";
import { IProduct } from "../../types/state";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { removeItemFromCart } from "../../state/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = (product: IProduct) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const item = items.find((item) => item.item.id === product.id);
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <img src={product.image} alt="product" />
        <div>
          <h5 className="cart-item__name">{product.name}</h5>
        </div>
      </div>
      <h5 className="cart-item__price">${product.price}</h5>
      <QuantityButtons {...product} />
      <h5 className="cart-item__subtotal"> {item && `$${formatPrice(item.quantity * product.price)}`} </h5>
      <button className="cart-item__remove-btn" onClick={() => dispatch(removeItemFromCart(product))}>
        <FaTrash className="cart-item__icon" />
      </button>
    </div>
  );
};

export default CartItem;
