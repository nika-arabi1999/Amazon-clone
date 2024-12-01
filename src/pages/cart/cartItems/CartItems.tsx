import CardBtn from "../../../components/common/btn/CardBtn";
import { mockApi } from "../../../services/mockApi";
import { useZustandStore } from "../../../services/store";

import CartItem from "./CartItem";
import "./cartItems.scss";

function CartItems() {
  const cart = useZustandStore((state) => state.cart);
  const setCart = useZustandStore((state) => state.setCart);
  const setSaved = useZustandStore((state) => state.setSaved);
  const removeItemHandler = async (id: string) => {
    const newCart = await mockApi.removeItemFromCart(id);
    setCart(newCart);
  };
  async function addToSavedHandler({ id }: { id: string }) {
    const updatedSaved = await mockApi.addItemToSaved({
      body: {
        id: id,
        quantity: 1,
      },
    });
    setSaved(updatedSaved);
  }

  // save for later: remove from cart -> add to saved
  const saveForLater = async ({ id }: { id: string }) => {
    removeItemHandler(id);
    addToSavedHandler({ id });
  };

  return (
    <div className="cart-part cart-items">
      {/* title */}
      <h3 className="cart-items_title">Shopping Cart</h3>
      {/* list */}
      <div className="cart-items_list">
        {cart.line_items.length > 0 ? (
          cart.line_items.map((cartItem) => (
            <CartItem
              product={cartItem.product}
              productQuantity={cartItem.quantity}
            >
              <CardBtn
                className="CardBtn white"
                style={{ fontSize: "1.5rem" }}
                onClick={() => saveForLater({ id: cartItem.product.id })}
              >
                Save For Later
              </CardBtn>
              <CardBtn
                className="CardBtn white"
                style={{ fontSize: "1.5rem" }}
                onClick={() => removeItemHandler(cartItem.product.id)}
              >
                Delete
              </CardBtn>
            </CartItem>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
      {/* subTotal */}
      <div className="cart-items_subtotal">
        subtotal({cart.total_items} Items):
        {"  "}<span className="price-number">{cart.subtotal}$</span>
      </div>
    </div>
  );
}

export default CartItems;
