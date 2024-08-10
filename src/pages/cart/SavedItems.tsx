import { cartItems } from "../home/items";
import CartItem, { CartItemBtns } from "./CartItem";

function SavedItems() {
  return (
    <div className="cart-part cart-saved">
     <h3 className="cart-saved_title">Saved for later</h3>
      <div className="cart-saved_list">
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              image={cartItem.image}
              name={cartItem.name}
              size={cartItem.size}
              color={cartItem.color}
              price={cartItem.price}
              qty="hidden-qty"
            >
              {<SavedItemBtns />}
            </CartItem>
          );
        })}
      </div>
    </div>
  );
}



export function SavedItemBtns() {
  return (
    <div className="btn-div">
      <button className="cart-item_moveCart">Move to cart</button>
    <button className="cart-item_delete">Delete</button>
    
  </div>
  )
}

export default SavedItems;
