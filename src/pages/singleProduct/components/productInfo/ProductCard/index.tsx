import { LocationOnOutlined } from "@mui/icons-material";
import "./ProducrCard.scss";
import { ProductContext } from "../../..";
import { useContext, useState } from "react";
import {
  useAddItemToCartMutation,
  useGetCartQuery,
} from "../../../../../services/dashboardApi";

import CardBtn from "../../../../../components/common/btn/CardBtn";
function ProductCard() {
  const [quantity, setQuantity] = useState<number>(1);
  const { product } = useContext(ProductContext);
  const { data: cart, refetch: refetchCart } = useGetCartQuery(
    "cart_ypbroEGWOVl8n4"
  );
  console.log("cd1:", cart);

  const [addToCart, { data, isLoading, error }] = useAddItemToCartMutation();
  function addToCartHandler() {
    if (!product) return;
    addToCart({
      cart_id: "cart_ypbroEGWOVl8n4",
      body: { id: product.id, quantity },
    })
      .unwrap()
      .then(() => {
        refetchCart();
      v});
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
          value={quantitiy}
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

      <CardBtn className="CardBtn secondary" style={{ width: "100%" }}>
        Add To List
      </CardBtn>
    </div>
  );
}

export default ProductCard;
