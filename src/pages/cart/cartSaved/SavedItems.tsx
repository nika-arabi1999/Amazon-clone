import CardBtn from "../../../components/common/btn/CardBtn";
import { useZustandStore } from "../../../services/store";

import CartItem from "../cartItems/CartItem";

function SavedItems() {
  const saved = useZustandStore((state) => state.saved);
  return (
    <div className="cart-part cart-saved">
      <h3 className="cart-saved_title">Saved for later</h3>
      <div className="cart-saved_list">
        {saved.line_items.map((cartItem) => {
          return <CartItem product={cartItem.product} />;
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
