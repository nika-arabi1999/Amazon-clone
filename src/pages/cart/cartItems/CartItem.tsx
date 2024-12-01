import { useEffect, useState } from "react";
import { Product } from "../../../services/types";
import { useZustandStore } from "../../../services/store";
import { mockApi } from "../../../services/mockApi";

export default function CartItem({
  product,
  children,
  hideQTY = false,
  productQuantity,
}: {
  product: Product;
  children: any;
  hideQTY?: boolean;
  productQuantity?: number;
}) {
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
  const [itemQuantity, setItemQuantity] = useState(productQuantity);
  console.log(itemQuantity);

  const setCart = useZustandStore((state) => state.setCart);
  const quantityChangeHandler = async (qty: number) => {
    setItemQuantity(qty);
    const updatedCart = await mockApi.addItemToCart({
      body: {
        id: product?.id,
        quantity: qty,
      },
    });
    setCart(updatedCart);
  };

  return (
    <div className="cart-item">
      <div className="cart-item--info">
        <div className="cart-item_image">
          <img src={`${product.image[0].source}`} alt="" />
        </div>
        <div className="cart-item_details">
          <div className="details_name">{product?.name}</div>
          <div className="details_price">
            <span style={{ fontWeight: "bolder" }}>Price: </span>
            {product?.price.formatted}$
          </div>
          <div className="details_price">
            <span style={{ fontWeight: "bolder" }}>Color: </span>
            {product?.variant.color}
          </div>
          <div className="details_price">
            <span style={{ fontWeight: "bolder" }}>Brand: </span>
            {product?.variant.brand}
          </div>
          <div className="cart-item--options cart-item--options__desktop">
            <div className={`${hideQTY ? "hidden" : ""} cart-item_quantity`}>
              <label htmlFor="quantity">QTY:</label>
              <select
                name="quantity"
                id="10"
                className={`qty-select`}
                defaultValue={itemQuantity}
                onChange={(e) => quantityChangeHandler(Number(e.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div
              className="btn-div row"
              style={{ display: "flex", gap: "5px" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="cart-item--options cart-item--options__mobile">
        <div className={`${hideQTY ? "hidden" : ""} cart-item_quantity`}>
          <label htmlFor="quantity">QTY:</label>
          <select
            name="quantity"
            id="10"
            className={`qty-select`}
            defaultValue={itemQuantity}
            onChange={(e) => quantityChangeHandler(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="btn-div row" style={{ display: "flex", gap: "5px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
