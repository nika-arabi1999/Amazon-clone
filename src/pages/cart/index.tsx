import CartItems from "./cartItems/CartItems";
import { CartRelated, CartRelatedDesktop } from "./CartRelated";

import SavedItems from "./cartSaved/SavedItems";
import SubTotal from "./SubTotal";
import "./cart.scss";

import useResizeWindow from "../../hooks/useResizeWindow";
import { useZustandStore } from "../../services/store";
import { products } from "../../services/staticData";
import { mockApi } from "../../services/mockApi";

function Cart() {
  const [isMobile] = useResizeWindow();
  const cart = useZustandStore((state) => state.cart);
  const setCart = useZustandStore((state) => state.setCart);
  // find related products:
  const firstCartItem = cart?.line_items[0]?.product || null;
  const relatedCategoryId = firstCartItem?.category_id || "cat_1";
  const relatedItems = products
    .filter((p) => p.category_id === relatedCategoryId)
    .slice(0, 4);

  //add to cart:

  async function addToCartHandler({
    id,
    quantity,
  }: {
    id: string;
    quantity: number;
  }) {
    if (cart.line_items?.find((item) => item.product.id === id)) {
      alert(
        "you have already added this item to your cart, now you can change the quantity if you want."
      );
      // setCart(cart);
    } else {
      const updatedCart = await mockApi.addItemToCart({
        body: {
          id: id,
          quantity: quantity || 1,
        },
      });
      setCart(updatedCart);
    }
  }
  return (
    <div className="cart">
      {/* ___________content___________ */}
      {isMobile ? (
        <CartContent
          relatedItems={relatedItems}
          addToCartHandler={addToCartHandler}
        />
      ) : (
        <CartContentDesktop
          relatedItems={relatedItems}
          addToCartHandler={addToCartHandler}
        />
      )}
    </div>
  );
}

function CartContent({ relatedItems, addToCartHandler }) {
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
        <CartRelated
          relatedItems={relatedItems}
          addToCartHandler={addToCartHandler}
        />
      </div>
    </div>
  );
}

function CartContentDesktop({ relatedItems, addToCartHandler }) {
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
        <CartRelatedDesktop
          relatedItems={relatedItems}
          addToCartHandler={addToCartHandler}
        />
      </div>
    </div>
  );
}

export default Cart;
