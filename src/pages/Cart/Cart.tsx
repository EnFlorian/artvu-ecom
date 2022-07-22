import { CartHeader, CartItem } from "../../components";
import "./Cart.scss";
import { addToCart } from "../../state/CartSlice";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";

const Cart = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // demo purposes to fill the cart
  useEffect(() => {
    dispatch(addToCart({ item: products[0], quantity: 2 }));
    dispatch(addToCart({ item: products[1], quantity: 2 }));
  }, []);

  const cartItems = [...new Set(items)].map((item, index) => {
    return <CartItem key={index} {...item.item} />;
  });

  return (
    <section className="cart container">
      <CartHeader />
      {cartItems}
      <div className="cart__summary-wrapper">
        <div className="cart__summary">
          <h5 className="cart__total">
            Total Price:{" "}
            <p className="cart__total-value">
              ${formatPrice(items.reduce((acc, item) => acc + item.quantity * item.item.price, 0))}
            </p>
          </h5>
          <button className="cart__summary-btn">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
