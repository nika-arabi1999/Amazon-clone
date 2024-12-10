// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./singleProduct.scss";

import ProductDetails from "./components/productInfo/ProductDetails";
import AddProductCard from "./components/productInfo/ProductCard";
import ProductRelated from "./components/productRelated";
// import ProductReviews from "./productReviews";
import ReviewsStars from "./components/productReviews/reviewsStars";
import ReviewsComments from "./components/productReviews/reviewsComments";
import ProductDescription from "./components/productDescription";
import ProductTable from "./components/productTable";
import ProductPhotos from "./components/productInfo/ProductPhotos";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { createContext, useEffect, useState } from "react";
import { mockApi } from "../../services/mockApi";
import { product } from "../../services/types";

export const ProductContext = createContext({ product: null });
function SingleProduct() {
  const { product_id } = useParams();
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(true);
  const [product, setProduct] = useState<product>();
  const [relatedProducts, setRelatedProducts] = useState();

  // const {
  //   data: product,
  //   isLoading,
  //   error,
  // } = useGetProductQuery({ product_id: slug });
  useEffect(() => {
    const fetchRelatedProducts = async (category_id: string | undefined) => {
      try {
        setLoading(true);
        const products = await mockApi.getProducts({
          category_id: category_id,
        });
        setRelatedProducts(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    const fetchProduct = async (product_id: string | undefined) => {
      try {
        setLoading(true);
        const product = await mockApi.getProduct({
          product_id: product_id,
        });
        setProduct(product);
        fetchRelatedProducts(product.category_id);
        console.log(product);
      } catch (err:any) {
        // setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct(product_id);
  }, [product_id]);

  // const text = "<div style={{ color: `black` }}>Loading...</div>";
  if (loading)
    return (
      <div className="products-Loading">
        <ReactLoading type="spin" color="#ffd000" height={70} width={70} />
      </div>
    );

  return (
    <div
      className="main-product-container"
      style={{ color: "#000", width: "100%", background: "#fff" }}
    >
      {/* _FIRST____Info_____________________________________ */}
      <div className="product-info">
        {/* -----photos---- D */}
        <ProductPhotos product={product} />
        {/* -----details----- */}
        <ProductDetails product={product} />
        {/* -----add to card----- */}
        <AddProductCard product={product} />
      </div>
      {/* _SECOND___description______________________________ */}
      <div className="product-description">
        <h3>Product Description</h3>
        <ProductDescription />
      </div>
      {/* _THIRD____related_________________________________ */}
      <div className="product-related">
        <ProductRelated relatedProducts={relatedProducts} />
      </div>
      {/* _Fourth___table__________________________________ */}
      <div className="product-table">
        <ProductTable product={product} />
      </div>
      {/* _Fifth____reviews_________________________________ */}
      <div className="product-reviews">
        {/* --------------stars column-------------- */}
        <ReviewsStars />
        {/* -------------commnts column------------- */}
        <ReviewsComments />
      </div>
    </div>
  );
}

export default SingleProduct;
