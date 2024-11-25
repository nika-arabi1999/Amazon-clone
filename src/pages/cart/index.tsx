import CartItems from "./cartItems/CartItems";
import { CartRelatedDesktop } from "./CartRelated";

import SavedItems from "./cartSaved/SavedItems";
import SubTotal from "./SubTotal";
import "./cart.scss";
import CartRecent from "./CartRecent";
import useResizeWindow from "../../hooks/useResizeWindow";

function Cart() {
  const [isMobile] = useResizeWindow();
  return (
    <div className="cart">
      {/* ___________content___________ */}
      {isMobile ? <CartContent /> : <CartContentDesktop />}
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
