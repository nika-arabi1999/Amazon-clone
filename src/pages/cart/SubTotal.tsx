import CardBtn from "../../components/common/btn/CardBtn";
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
      <CardBtn className="CardBtn primary" style={{width:"100%"}}>Proceed To checkout</CardBtn>
      </span>
    </div>
  );
}

export default SubTotal;
