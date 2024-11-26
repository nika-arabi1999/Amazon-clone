import { useZustandStore } from "../../../services/store";

import CartItem from "./CartItem";
import "./cartItems.scss";

function CartItems() {
  const cart = useZustandStore((state) => state.cart);


  return (
    <div className="cart-part cart-items">
      {/* title */}
      <h3 className="cart-items_title">Shopping Cart</h3>
      {/* list */}
      <div className="cart-items_list">
        {cart.line_items.map((cartItem) => (
          <CartItem product={cartItem.product} />
        ))}
      </div>
      {/* subTotal */}
      <div className="cart-items_subtotal">
        subtotal(4 Items):<span className="price-number"> 43.99$</span>
      </div>
    </div>
  );
}

export default CartItems;
