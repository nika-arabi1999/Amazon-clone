import { LocationOnOutlined } from "@mui/icons-material";
import "./ProducrCard.scss";

import CardBtn from "../../../../../components/common/btn/CardBtn";
import { useState } from "react";
import { Product } from "../../../../../services/types";
import { mockApi } from "../../../../../services/mockApi";
import { useZustandStore } from "../../../../../services/store";
function AddProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);
  const setCart = useZustandStore((state) => state.setCart);
  const setSaved = useZustandStore((state) => state.setSaved);
  async function addToCartHandler() {
    const updatedCart = await mockApi.addItemToCart({
      body: {
        id: product.id,
        quantity: quantity || 1,
      },
    });
    setCart(updatedCart);
  }
  async function addToSavedHandler() {
    const updatedSaved = await mockApi.addItemToSaved({
      body: {
        id: product.id,
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
          onClick={addToCartHandler}
          className="CardBtn primary"
          style={{ width: "100%" }}
        >
          Add To Cart
        </CardBtn>
      </div>

      <CardBtn
        className="CardBtn secondary"
        style={{ width: "100%" }}
        onClick={addToSavedHandler}
      >
        Add To List
      </CardBtn>
    </div>
  );
}

export default AddProductCard;
