import CartItems from "./CartItems";
import { CartRelated, CartRelatedDesktop } from "./CartRelated";

import SavedItems from "./SavedItems";
import SubTotal from "./SubTotal";
import "./cart.scss";
import CartRecent from "./CartRecent";

function Cart() {
  return (
    <div className="cart">
      {/* ___________content___________ */}
      <CartContentDesktop />
      {/* ___________recent___________ */}
      <div className="cart-recent">
        <CartRecent />
      </div>
    </div>
  );
}

function CartContent() {
  return (
    <div className="cart-content">
      {/* ___Left___ */}
      <div className="cart-content-up-left">
        <SubTotal />
        <CartItems />
      </div>
      {/* ___Right___ */}
      <div className="cart-content-down-right">
        <SavedItems />
        <CartRecent />
      </div>
    </div>
  );
}

function CartContentDesktop() {
  return (
    <div className="cart-content">
      {/* ___Left___ */}
      <div className="cart-content-up-left">
        <CartItems />
        <SavedItems />
      </div>
      {/* ___Right___ */}
      <div className="cart-content-down-right">
        <SubTotal />
        <CartRelatedDesktop />
      </div>
    </div>
  );
}

export default Cart;
