import CardBtn from "../../../components/common/btn/CardBtn";
import { cartItems } from "../../home/items";
import CartItem from "../cartItems/CartItem";

function SavedItems() {
  return (
    <div className="cart-part cart-saved">
      <h3 className="cart-saved_title">Saved for later</h3>
      <div className="cart-saved_list">
        {cartItems.map((cartItem) => {
          return <CartItem product={cartItem} />;
        })}
      </div>
    </div>
  );
}

export function SavedItemBtns() {
  return (
    <div className="btn-div row">
      <CardBtn className="CardBtn white">Move to cart</CardBtn>
      <CardBtn className="CardBtn white">Delete</CardBtn>
    </div>
  );
}

export default SavedItems;
