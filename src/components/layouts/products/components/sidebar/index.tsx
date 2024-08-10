import React from "react";
import "./sidebar.scss";
import ReactSlider from "react-slider";
function ProductsSideBar() {
  // const pros = useGetProductsQuery();
  // console.log(pros)

  return (
    <div className="sidebar">
      <div className="sidebar-box_department">
        <div className="sidebar-box_title">department</div>
        <div className="sidebar-box_content">department</div>
      </div>
      <div className="sidebar-box_category">
        <div className="sidebar-box_title">category</div>
        <div className="sidebar-box_content">category</div>
      </div>

      <StarRating />
      <BrandsFilter />
      {/* <RangeSlider /> */}

      <div className="sidebar-box_color">
        <div className="sidebar-box_title">color</div>
        <div className="sidebar-box_content">color</div>
      </div>
      <div className="sidebar-box_seller">
        <div className="sidebar-box_title">seller</div>
        <div className="sidebar-box_content">seller</div>
      </div>
    </div>
  );
}

function BrandsFilter(params: type) {
  return (
    <div className="sidebar-box_brands">
      <div className="sidebar-box_title">brands</div>
      <div className="sidebar-box_content">
        {brands.map((brand) => (
          <div className="single-brand">
            <input type="checkbox"></input>
            <label htmlFor="input">{`${brand.name}`}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export const StarRating = () => {
  return (
    <div className="sidebar-box_review">
      <div className="sidebar-box_title">review</div>
      <div style={{ color: "#ffa41c", fontSize: "2rem" }}>
        &#9733;&#9733;&#9733;&#9734;&#9734;
      </div>{" "}
    </div>
  );
};

export const RangeSlider = () => {
  return (
    <div className="sidebar-box_price" style={{ width: "100%" }}>
      <div className="sidebar-box_title">price</div>
      <div className="sidebar-box_content" style={{ width: "100%" }}>
        <ReactSlider
          className="horizontal-slider  range-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  );
};

const brands = [
  { name: "Selleraaaa" },
  { name: "Sellerlll" },
  { name: "Sellermmmm" },
  { name: "Sellerppp" },
  { name: "Sellernnnn" },
  { name: "Sellercccc" },
];

export default ProductsSideBar;
