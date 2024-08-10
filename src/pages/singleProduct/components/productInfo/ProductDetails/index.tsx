import { product } from "../../../product"; 
import "./ProductDetails.scss";
function ProductDetails() {
  return (
    <div className="product-info_details">
      <DetailsTitle />
      <DetailsPrice />
      <DetailsDescription />
    </div>
  );
}

function DetailsTitle() {
  return (
    <div className="details_title">
      <span className="details_title_name">{product.name}</span>
      <span className="details_title_rate">
        <span className="rate--first">
          <span className="rate-average">3.2</span>
          <span className="rate-stars">
            &#9733;&#9733;&#9733;&#9734;&#9734;
          </span>
        </span>
        <span className="rate-number">62 ratings</span>
      </span>
    </div>
  );
}

function DetailsPrice() {
  return <div className="details_price">87$</div>;
}

function DetailsDescription() {
  return (
    <div className="details_description">
      Note: Products with electrical plugs are designed for use in the US.
      Outlets and voltage differ internationally and this product may require an
      adapter or converter for use in your destination. Please check
      compatibility before purchasing.
    </div>
  );
}

export default ProductDetails;
