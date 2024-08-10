import { LocationOnOutlined } from "@mui/icons-material";
import "./ProducrCard.scss";
function ProductCard() {
  return (
    <div className="card">
      <div className="card-price">87$</div>
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
        <select name="quantity" id="90" className="card-quantitiy_select">
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="card-add-to-cart">
        <button>Add to Card</button>
      </div>
      <div className="card-add-to-list">
        <CardBtn text={"Add to cart"} />
      </div>
    </div>
  );
}

export function CardBtn({ text }: { text: string }) {
  return <button className="CardBtn">{text}</button>;
}

export default ProductCard;
