// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./singleProduct.scss";

import ProductDetails from "./components/productInfo/ProductDetails";
import ProductCard from "./components/productInfo/ProductCard";
import ProductRelated from "./components/productRelated";
// import ProductReviews from "./productReviews";
import ReviewsStars from "./components/productReviews/reviewsStars";
import ReviewsComments from "./components/productReviews/reviewsComments";
import ProductDescription from "./components/productDescription";
import ProductTable from "./components/productTable";
import ProductPhotos from "./components/productInfo/ProductPhotos";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../services/dashboardApi";
import { createContext } from "react";


export const ProductContext = createContext({product: null});
function SingleProduct() {
  const { slug } = useParams();
  console.log(slug);
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductQuery({ product_id: slug });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product data.</div>;
  return (
    <ProductContext.Provider value={!isLoading ? { product } : null}>
      <div
        className="main-product-container"
        style={{ color: "#000", width: "100%", background: "#fff" }}
      >
        {/* _FIRST____Info_____________________________________ */}
        <div className="product-info">
          {/* -----photos---- D */}
          <ProductPhotos />
          {/* -----details----- */}
          <ProductDetails />
          {/* -----add to card----- */}
          <ProductCard />
        </div>
        {/* _SECOND___description______________________________ */}
        <div className="product-description">
          <h3>Product Description</h3>
          <ProductDescription />
        </div>
        {/* _THIRD____related_________________________________ */}
        <div className="product-related">
          <ProductRelated/>
        </div>
        {/* _Fourth___table__________________________________ */}
        <div className="product-table">
          <ProductTable />
        </div>
        {/* _Fifth____reviews_________________________________ */}
        <div className="product-reviews">
          {/* --------------stars column-------------- */}
          <ReviewsStars />
          {/* -------------commnts column------------- */}
          <ReviewsComments />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default SingleProduct;
