import { CardBtn } from "../singleProduct/components/productInfo/ProductCard";
import "./../singleProduct/components/productInfo/ProductCard/ProducrCard.scss"
function SubTotal() {
  return (
    <div className="cart-part cart-subtotal">
      <span className="cart-subtotal-header">
        Subtotal <sup>$</sup>43<span className="total-sup"><sup><strong>99</strong></sup></span>
      </span>
      <span className="cart-subtotal-giftCheck">
        <input type="checkbox" style={{width:"17px", height:"17px"}}/>
        This order contains a gift
      </span>
      <span className="cart-subtotal-btn">
        <CardBtn text={"Proceed to checkout"} />
      </span>
    </div>
  );
}

export default SubTotal;
