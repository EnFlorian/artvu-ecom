import { CartHeader, CartItem } from "../../components";
import "./Cart.scss";

const Cart = () => {
  return (
    <section className="cart container">
      <CartHeader />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </section>
  );
};

export default Cart;
