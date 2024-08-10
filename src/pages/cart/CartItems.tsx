import useResizeWindow from "../../hooks/useResizeWindow";
import { cartItems } from "../home/items";
import CartItem, { CartItemBtns, CartItemDesktop } from "./CartItem";

function CartItems() {
  const [isMobile, isDesktop] = useResizeWindow();
  return (
    <div className="cart-part cart-items">
      <h3 className="cart-items_title">Shopping Cart</h3>
      <div className="cart-items_list">
        {cartItems.map((cartItem) => {
          return isMobile ? (
            <CartItem
              image={cartItem.image}
              name={cartItem.name}
              size={cartItem.size}
              color={cartItem.color}
              price={cartItem.price}
            >
              {<CartItemBtns />}
            </CartItem>
          ) : (
            <CartItemDesktop
              image={cartItem.image}
              name={cartItem.name}
              size={cartItem.size}
              color={cartItem.color}
              price={cartItem.price}
            >
              {<CartItemBtns />}
            </CartItemDesktop>
          );
        })}
      </div>
      <div className="cart-items_subtotal">
        subtotal(4 Items):<span className="price-number"> 43.99$</span>
      </div>
    </div>
  );
}

export default CartItems;
