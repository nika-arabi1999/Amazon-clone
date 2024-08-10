import { useGetProductsQuery } from "../../services/dashboardApi";
import "./products.scss";

function Products() {
  const { data,isLoading } = useGetProductsQuery();
  console.log(data?.data);

  return (
    <div className="products" style={{ color: "black" }}>
      <div className="products-setting">
        <div className="products-setting_toggle">
          <button className="toggle-sidebar">Show Filters</button>
        </div>
        <div className="products-setting_sort">
          <select name="sort" id="sort" className="select-sort">
            <option value="earlist">earlist</option>
            <option value="latest">latest</option>
          </select>
        </div>
      </div>
      { isLoading ? "is loading..." : 
         <div className="products-items">
         {data?.data.map((product, index) => {
           return <ProductCard product={product} key={index} />;
         })}
       </div>
       }
    </div>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* image */}
      <div className="product-card_image">
        <img src={`${product.image.url}`} alt="image" />
      </div>

      <div className="product-card-details">
        {/* name------------------------------------------- */}
        <div className="product-card_name">{product.name}</div>
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
