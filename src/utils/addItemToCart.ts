import { mockApi } from "../services/mockApi";
import { useZustandStore } from "../services/store";

const setCart = useZustandStore((state) => state.setCart);
async function addToCartHandler({id, quantity}) {
  const updatedCart = await mockApi.addItemToCart({
    body: {
      id: id,
      quantity: quantity || 1,
    },
  });
  setCart(updatedCart);
}

export default addToCartHandler;
