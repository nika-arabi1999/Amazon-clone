import { LocationOnOutlined } from "@mui/icons-material";
import "./ProducrCard.scss";

import CardBtn from "../../../../../components/common/btn/CardBtn";
import { useState } from "react";
import { product } from "../../../../../services/types";
import { useZustandStore } from "../../../../../services/store";
import { mockApi } from "../../../../../services/mockApi";

function AddProductCard({ product }: { product: product }) {
  const [quantity, setQuantity] = useState<number>(1);
  const setSaved = useZustandStore((state) => state.setSaved);
  const setCart = useZustandStore((state) => state.setCart);
  // cart items:

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

  // saved items:

  async function addToSavedHandler({ id }: { id: string }) {
    const updatedSaved = await mockApi.addItemToSaved({
      body: {
        id: id,
        quantity: 1,
      },
    });
    setSaved(updatedSaved);
  }

  return (
    <div className="card">
      <div className="card-price">${product.price.raw}</div>
      <a className="card-return">FREE International Returns</a>
      <div className="card-delivery">
        Delivery <strong>Wednesday, July 31</strong>
      </div>
      <div className="card-country">
        <LocationOnOutlined />
        <span>
          Deliver to <strong>Netherlands</strong>
        </span>
      </div>
      <div className="card-quantitiy">
        <label>Choose Quantity:</label>
        <select
          name="quantity"
          id="90"
          className="card-quantitiy_select"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      {/* btns */}
      <div className="card-add-to-cart">
        <CardBtn
          onClick={() =>
            addToCartHandler({ id: product.id, quantity: quantity })
          }
          className="CardBtn primary"
          style={{ width: "100%" }}
        >
          Add To Cart
        </CardBtn>
      </div>

      <CardBtn
        className="CardBtn secondary"
        style={{ width: "100%" }}
        onClick={() => addToSavedHandler({ id: product.id })}
      >
        Add To List
      </CardBtn>
    </div>
  );
}

export default AddProductCard;
