import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <section>
      <div className="cart-header">
        <h5 className="cart-header__item">Item</h5>
        <h5 className="cart-header__item"> Price</h5>
        <h5 className="cart-header__item">Quantity</h5>
        <h5 className="cart-header__item">Subtotal</h5>
        <span></span>
      </div>
    </section>
  );
};

export default CartHeader;
