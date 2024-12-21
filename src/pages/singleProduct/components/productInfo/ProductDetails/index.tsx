import "./ProductDetails.scss";
import DOMPurify from "dompurify";
import { product } from "../../../../../services/types";

function ProductDetails({ product }:{product: product}) {
  return (
    <div className="product-info_details">
      <DetailsTitle product={product} />
      <DetailsPrice product={product} />
      <DetailsDescription product={product} />
    </div>
  );
}

function DetailsTitle({ product }:{product: product}) {
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

function DetailsPrice({ product }: { product: product }) {
  return (
    <div className="details_price">{product.price.formatted_with_symbol}</div>
  );
}

function DetailsDescription({ product }: { product: product }) {
  // Sanitize the HTML description
  const sanitizedDescription = DOMPurify.sanitize(product.variant.description);

  return (
    <div className="details_description">
      {/* Render the sanitized HTML */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
    </div>
  );
}

export default ProductDetails;
