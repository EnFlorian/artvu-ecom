interface ICartState {
  cart: IProduct[];
  itemAmount: number;
  totalPrice: number;
  shippingCost: number;
}

interface ICartContext extends ICartState {
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: (product: IProduct) => void;
}

type CartActionType =
  | { type: "ADD_TO_CART"; payload: IProduct }
  | { type: "REMOVE_FROM_CART"; payload: IProduct }
  | { type: "CLEAR_CART"; payload: IProduct };
