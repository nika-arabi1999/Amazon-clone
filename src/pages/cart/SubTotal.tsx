import CardBtn from "../../components/common/btn/CardBtn";
import { useZustandStore } from "../../services/store";
import "./../singleProduct/components/productInfo/ProductCard/ProducrCard.scss";
function SubTotal() {
  const cart = useZustandStore((state) => state.cart);
  return (
    <div className="cart-part cart-subtotal">
      <span className="cart-subtotal-header">Subtotal ${cart.subtotal}</span>
      <span className="cart-subtotal-giftCheck">
        <input type="checkbox" style={{ width: "17px", height: "17px" }} />
        This order contains a gift
      </span>
      <span className="cart-subtotal-btn">
        <CardBtn className="CardBtn primary" style={{ width: "100%" }}>
          Proceed To checkout
        </CardBtn>
      </span>
    </div>
  );
}

export default SubTotal;
