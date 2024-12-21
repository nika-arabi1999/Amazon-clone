import { useEffect, useState } from "react";
import SidebarSheet from "../../components/layouts/components/SidebarSheet/SidebarSheet";
import "./../../components/layouts/components/SidebarSheet/SidebarSheet.scss";
import useResizeWindow from "../../hooks/useResizeWindow";
import ReactLoading from "react-loading";

import "./products.scss";
import ProductsSideBar from "./sidebar";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { mockApi } from "../../services/mockApi";
import { product } from "../../services/types";

function Products() {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isMobile, isTablet] = useResizeWindow();
  const [products, setProducts] = useState<product[] | undefined>([]);
  const [filteredProducts, setFilteredProducts] = useState<
    product[] | undefined
  >([]);
  const [loading, setLoading] = useState(true);
  const [sortBase, setSortBase] = useState("select");
  const [error, setError] = useState(false);
  const { category_id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");
  console.log({ query });

  const searchCategory = searchParams.get("searchCategory");
  console.log({ searchCategory });

  // const [brands, setBrands] = useState([]);
  const brands = [
    ...new Set(
      products?.map((product) => product.variant.brand).filter((brand) => brand)
    ),
  ];
  const colors = [
    ...new Set(
      products?.map((product) => product.variant.color).filter((color) => color)
    ),
  ];
  const price: number[] = [
    ...new Set(products?.map((product) => product.price.raw)),
  ];
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);

  // const { data: products, isFetching } = useGetProductsQuery({
  //   category_slug: category,
  // });
  useEffect(() => {
    const setSearchedProducts = async () => {
      let products;
      if (category_id) {
        products = await mockApi.getProducts({
          category_id: category_id,
        });
      } else if (query && searchCategory === "all") {
        products = await mockApi.getProducts({
          query: query,
          searchCategory,
        });
      } else if (query && searchCategory !== "all") {
        products = await mockApi.getProducts({
          query,
          searchCategory,
        });
      }
      return products;
    };
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await setSearchedProducts();
        console.log({ productsssss: products });

        setProducts(products);
        setFilteredProducts(products);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category_id, query, searchCategory]);
  error && <>nothing found!</>;
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
            sortBase={sortBase}
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </SidebarSheet>
      ) : (
        <ProductsSideBar
          brands={brands}
          colors={colors}
          price={[minPrice, maxPrice]}
          sortBase={sortBase}
          products={products}
          setFilteredProducts={setFilteredProducts}
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
            <select
              name="sort"
              id="sort"
              className="select-sort"
              onChange={(e) => setSortBase(e.target.value)}
            >
              <option value="select">Select Sort</option>
              <option value="earliest">earlist</option>
              <option value="latest">latest</option>
            </select>
          </div>
        </div>
        {loading ? (
          <div className="products-Loading">
            <ReactLoading type="spin" color="#ffd000" height={70} width={70} />
          </div>
        ) : (
          <div className="products-items">
            {filteredProducts?.map((product, index) => {
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
          <img src={`${product.image[0].source}`} alt="image" />
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
