import { CartHeader, CartItem } from "../../components";
import "./Cart.scss";
import { addToCart } from "../../state/CartSlice";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

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
    </section>
  );
};

export default Cart;
