
import { product } from "../../../../../services/types";
import SingleProductSwiper from "./SingleProductSwiper";
// import { product } from "../../../../../services/types";

function ProductPhotos({ product }: { product: product }) {
  return (
    <div className="product-info_photos">
      <SingleProductSwiper product={product} />
    </div>
  );
}

export default ProductPhotos;
