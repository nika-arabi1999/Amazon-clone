import CardBtn from "../../../components/common/btn/CardBtn";
import { mockApi } from "../../../services/mockApi";
import { useZustandStore } from "../../../services/store";

import CartItem from "../cartItems/CartItem";

function SavedItems() {
  const saved = useZustandStore((state) => state.saved);
  const setSaved = useZustandStore((state) => state.setSaved);
  const setCart = useZustandStore((state) => state.setCart);
  const removeSavedItem = async (id: string) => {
    const newSaved = await mockApi.removeItemFromSaved(id);
    setSaved(newSaved);
  };
  async function addToCartHandler({
    id,
    quantity,
  }: {
    id: string;
    quantity: number;
  }) {
    const updatedCart = await mockApi.addItemToCart({
      body: {
        id: id,
        quantity: quantity || 1,
      },
    });
    setCart(updatedCart);
  }
  // remove from saved - add item to cart with quantity 1
  const moveToCart = async (id: string) => {
    removeSavedItem(id);
    addToCartHandler({ id, quantity: 1 });
  };

  return (
    <div className="cart-part cart-saved">
      <h3 className="cart-saved_title">Saved for later</h3>
      <div className="cart-saved_list">
        {saved.line_items.length > 0 ? (
          saved.line_items.map((cartItem) => {
            return (
              <CartItem product={cartItem.product} hideQTY={true}>
                <CardBtn
                  className="CardBtn white"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => moveToCart(cartItem.product.id)}
                >
                  Move To Cart
                </CardBtn>
                <CardBtn
                  className="CardBtn white"
                  style={{ fontSize: "1.5rem" }}
                  onClick={() => removeSavedItem(cartItem.product.id)}
                >
                  Delete
                </CardBtn>
              </CartItem>
            );
          })
        ) : (
          <p>Nothing saved yet!</p>
        )}
      </div>
    </div>
  );
}

export function SavedItemBtns({
  removeSavedItem,
}: {
  removeSavedItem: () => Promise<void>;
}) {
  return (
    <div className="btn-div row">
      <CardBtn className="CardBtn white">Move to cart</CardBtn>
      <CardBtn className="CardBtn white" onClick={removeSavedItem}>
        Delete
      </CardBtn>
    </div>
  );
}

export default SavedItems;
