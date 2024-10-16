import { products } from "../../home/items";
import CartItem from "./CartItem";
import "./cartItems.scss";

function CartItems() {
  return (
    <div className="cart-part cart-items">
      <h3 className="cart-items_title">Shopping Cart</h3>
      <div className="cart-items_list">
        {products.map((cartItem) => (
          <CartItem product={cartItem} />
        ))}
      </div>
      <div className="cart-items_subtotal">
        subtotal(4 Items):<span className="price-number"> 43.99$</span>
      </div>
    </div>
  );
}

export default CartItems;
