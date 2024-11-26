import CardBtn from "../../../components/common/btn/CardBtn";
import { Product } from "../../../services/types";

export default function CartItem({ product }: { product: Product }) {
  // const [addToCart, {}] = useAddItemToCartMutation();
  // const [removeItem, {}] = useRemoveItemFromCartMutation();
  // const onQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   addToCart({
  //     cart_id: "cart_ypbroEGWOVl8n4",
  //     body: {
  //       id: product?.id,
  //       quantity: Number(e.target.value),
  //     },
  //   });
  // };
  // const onRemoveItem = () => {
  //   removeItem({
  //     cart_id: "cart_ypbroEGWOVl8n4",
  //     line_item_id: product?.id,
  //   });
  // };
  const onRemoveItem = () => {
    console.log("onRemoveItem");
  };
  console.log("hoy", product.image[0]);

  return (
    <div className="cart-item">
      <div className="cart-item--info">
        <div className="cart-item_image">
          <img src={`${product.image[0].source}`} alt="" />
        </div>
        <div className="cart-item_details">
          <div className="details_name">{product?.name}</div>
          <div className="details_price">{product?.price.formatted}</div>
          <div className="cart-item--options cart-item--options__desktop">
            <div className="cart-item_quantity">
              <label htmlFor="quantity">QTY:</label>
              <select
                name="quantity"
                id="10"
                className={`qty-select`}
                // onChange={onQuantityChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <CartItemBtns removeItem={onRemoveItem} />
          </div>
        </div>
      </div>
      <div className="cart-item--options cart-item--options__mobile">
        <div className="cart-item_quantity">
          <label htmlFor="quantity">QTY:</label>
          <select
            name="quantity"
            id="10"
            className={`qty-select`}
            // onChange={onQuantityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <CartItemBtns removeItem={onRemoveItem} />
      </div>
    </div>
  );
}

export function CartItemBtns({ removeItem }: { removeItem: () => void }) {
  return (
    <div className="btn-div row" style={{ display: "flex", gap: "5px" }}>
      <CardBtn className="CardBtn white" style={{ fontSize: "1.5rem" }}>
        Save For Later
      </CardBtn>
      <CardBtn
        className="CardBtn white"
        style={{ fontSize: "1.5rem" }}
        onClick={removeItem}
      >
        Delete
      </CardBtn>
    </div>
  );
}
