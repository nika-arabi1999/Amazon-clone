import { useEffect, useState } from "react";
import SidebarSheet from "../../components/layouts/components/SidebarSheet/SidebarSheet";
import "./../../components/layouts/components/SidebarSheet/SidebarSheet.scss";
import useResizeWindow from "../../hooks/useResizeWindow";

import "./products.scss";
import ProductsSideBar from "./sidebar";
import { Link, useParams } from "react-router-dom";
import { mockApi } from "../../services/mockApi";
import { product } from "../../services/types";

function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, isTablet] = useResizeWindow();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { category_id } = useParams();
  // const [brands, setBrands] = useState([]);
  const brands = [
    ...new Set(
      products.map((product) => product.variant.brand).filter((brand) => brand)
    ),
  ];
  const colors = [
    ...new Set(
      products.map((product) => product.variant.color).filter((color) => color)
    ),
  ];
  const price: number[] = [
    ...new Set(products.map((product) => product.price.raw)),
  ];
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  console.log(minPrice, maxPrice);

  // const { data: products, isFetching } = useGetProductsQuery({
  //   category_slug: category,
  // });
  useEffect(() => {
    const fetchProducts = async (category_id: string | undefined) => {
      try {
        setLoading(true);
        const products = await mockApi.getProducts({
          category_id: category_id,
        });
        setProducts(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts(category_id);
  }, [category_id]);

  console.log(brands);

  return (
    <div className="products-main">
      {isMobile && !isTablet ? (
        <SidebarSheet
          showSheet={showFilters}
          setShowSheet={setShowFilters}
          width="250px"
        >
          <ProductsSideBar
            brands={brands}
            colors={colors}
            price={[minPrice, maxPrice]}
          />
        </SidebarSheet>
      ) : (
        <ProductsSideBar
          brands={brands}
          colors={colors}
          price={[minPrice, maxPrice]}
        />
      )}

      <div className="products" style={{ color: "black" }}>
        <div className="products-setting">
          <div className="products-setting_toggle">
            <button
              className="toggle-sidebar"
              onClick={() => setShowFilters(true)}
            >
              Show Filters
            </button>
          </div>
          <div className="products-setting_sort">
            <select name="sort" id="sort" className="select-sort">
              <option value="earlist">earlist</option>
              <option value="latest">latest</option>
            </select>
          </div>
        </div>
        {loading ? (
          "is loading..."
        ) : (
          <div className="products-items">
            {products?.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: product }) {
  return (
    <div className="product-card">
      {/* image */}
      <div className="product-card_image">
        <Link to={`/singleProduct/${product.id}`}>
          <img src={`${product.image.source}`} alt="image" />
        </Link>
      </div>

      <div className="product-card-details">
        {/* name------------------------------------------- */}
        <Link to={`/singleProduct/${product.id}`} className="product-card_name">
          <div className="product-card_name">{product.name}</div>
        </Link>

        {/* rate------------------------------------------- */}
        <div className="product-card_rate">
          <div style={{ color: "#ffa41c", fontSize: "2rem" }}>
            &#9733;&#9733;&#9733;&#9734;&#9734;{" "}
            <span style={{ color: "black", fontSize: "1.5rem" }}>3/5</span>
          </div>
        </div>
        {/* price------------------------------------------- */}
        <div className="product-card_price">{`$${product.price.formatted}`}</div>
        {/* deliver date------------------------------------------- */}
        <div className="product-card_date">
          get it{" "}
          <span style={{ fontWeight: "bold" }}>Tue, OCT 5 - Fri, Nov 12</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
