import { ReactNode } from "react";

export default function CartItem({
  image,
  name,
  size,
  color,
  price,
  children,
  qty,
}: {
  image: string;
  name: string;
  size: string;
  color: string;
  price: string;
  children: ReactNode;
  qty?: string;
}) {
  return (
    <div className="cart-item">
      <div className="cart-item--info">
        <div className="cart-item_image">
          <img src={`${image}`} alt="" />
        </div>
        <div className="cart-item_details">
          <div className="details_name">{name}</div>
          <div className="details_price">{price}</div>
          <div className="details_size">size: {size}</div>
          <div className="details_color">color: {color}</div>
        </div>
      </div>
      <div className="cart-item--options">
        <div className="cart-item_quantity">
          <label htmlFor="quantity" className={`${qty}`}>QTY:</label>
          <select name="quantity" id="10" className={`${qty} qty-select`}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        {children}
      </div>
    </div>
  );
}

export function CartItemDesktop({
    image,
    name,
    size,
    color,
    price,
    children,
    qty,
  }: {
    image: string;
    name: string;
    size: string;
    color: string;
    price: string;
    children: ReactNode;
    qty?: string;
  }) {
    return (
      <div className="cart-item">
        <div className="cart-item--info">
          <div className="cart-item_image">
            <img src={`${image}`}  />
          </div>
          <div className="cart-item_details">
            <div className="details_name">{name}</div>
            <div className="details_price">{price}</div>
            <div className="details_size">size: {size}</div>
            <div className="details_color">color: {color}</div>
            <div className="cart-item--options">
          <div className="cart-item_quantity">
            <label htmlFor="quantity" className={`${qty}`}>QTY:</label>
            <select name="quantity" id="10" className={`${qty} qty-select`}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {children}
        </div>
      
          </div>
        </div>
      </div>
    );
  }


export function CartItemBtns() {
  return (
    <div className="btn-div">
      <button className="cart-item_delete">Delete</button>
      <button className="cart-item_saveLater">Save for later</button>
    </div>
  );
}
