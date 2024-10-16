import React, { ChangeEvent, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./sidebar.scss";

function ProductsSideBar({
  brands,
  colors,
  price,
}: {
  brands: string[];
  colors: string[];
  price: number[];
}) {
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
      <BrandsFilter brands={brands} />
      <ColorsFilter colors={colors} />
      <PriceSlider price={price} />
      <div className="sidebar-box_seller">
        <div className="sidebar-box_title">seller</div>
        <div className="sidebar-box_content">seller</div>
      </div>
    </div>
  );
}

function BrandsFilter({ brands }: { brands: string[] }) {
  return (
    <div className="sidebar-box_checkbox">
      <div className="sidebar-box_title">brands</div>

      <div className="sidebar-box_content">
        {brands ? <CheckBoxGroup options={brands} /> : ""}
      </div>
    </div>
  );
}
function ColorsFilter({ colors }: { colors: string[] }) {
  return (
    <div className="sidebar-box_checkbox">
      <div className="sidebar-box_title">Colors</div>
      <div className="sidebar-box_content">
        {colors ? <CheckBoxGroup options={colors} /> : ""}
      </div>
    </div>
  );
}

function CheckBoxGroup({ options }: { options: any }) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedItems((prev) => [...prev, value]);
    } else {
      setCheckedItems((prev) => prev.filter((item) => item !== value));
    }
  };
  console.log(checkedItems);
  return (
    <div>
      {options.map((option: any) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e)}
              value={option}
            />
            {option}
          </label>
        </div>
      ))}
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

export const PriceSlider = ({ price }: { price: number[] }) => {
  console.log(price);
  const [value, setValue] = React.useState<number[]>([20, 37]);
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="sidebar-box_price" style={{ width: "100%" }}>
      <div className="sidebar-box_title">Price</div>
      <div className="sidebar-box_content" style={{ width: "100%" }}>
        {price ? <RangeSlider min={99} max={1179} defaultValue={[99,1179]}/> : "..."}
      </div>
    </div>
  );
};

export default ProductsSideBar;
