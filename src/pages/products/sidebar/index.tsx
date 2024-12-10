import { ChangeEvent, useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./sidebar.scss";
import { product } from "../../../services/types";

function ProductsSideBar({
  brands,
  colors,
  price,
  products,
  sortBase,
  setFilteredProducts,
}: {
  brands: string[];
  colors: string[];
  price: number[];
  products: product[] | undefined;
  sortBase: string;
  setFilteredProducts: any;
}) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  console.log(selectedBrands, selectedColors, selectedPrice);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      // Filter by brands if any are selected
      if (selectedBrands.length > 0) {
        filtered = filtered?.filter((product) =>
          selectedBrands.includes(product.variant.brand)
        );
      }

      // Filter by colors if any are selected
      if (selectedColors.length > 0) {
        filtered = filtered.filter((product) =>
          selectedColors.includes(product.variant.color)
        );
      }

      // Filter by price range
      if (selectedPrice.length > 1) {
        filtered = filtered.filter(
          (product) =>
            product.price.raw >= selectedPrice[0] &&
            product.price.raw <= selectedPrice[1]
        );
      }
      if (sortBase === "earliest") {
        const sorted = [...filtered].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        filtered = sorted;
      }
      if (sortBase === "latest") {
        const sorted = [...filtered].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        filtered = sorted;
      }

      console.log({ filtered });

      // Update the filtered products state
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedBrands, selectedColors, selectedPrice, products, sortBase]);

  return (
    <div className="sidebar">
      {/* <div className="sidebar-box_department">
        <div className="sidebar-box_title">department</div>
        <div className="sidebar-box_content">department</div>
      </div>
      <div className="sidebar-box_category">
        <div className="sidebar-box_title">category</div>
        <div className="sidebar-box_content">category</div>
      </div> */}

      <StarRating />
      <BrandsFilter
        brands={brands}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
      <ColorsFilter
        colors={colors}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
      />
      <PriceSlider price={price} setSelectedPrice={setSelectedPrice} />
    </div>
  );
}

function BrandsFilter({
  brands,
  selectedBrands,
  setSelectedBrands,
}: {
  brands: string[];
  selectedBrands: string[] | undefined;
  setSelectedBrands: any;
}) {
  return (
    <div className="sidebar-box_checkbox">
      <div className="sidebar-box_title">brands</div>

      <div className="sidebar-box_content">
        {brands ? (
          <CheckBoxGroup
            options={brands}
            selectedInfo={selectedBrands}
            setSelectedInfo={setSelectedBrands}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function ColorsFilter({
  colors,
  selectedColors,
  setSelectedColors,
}: {
  colors: string[];
  selectedColors: string[];
  setSelectedColors: any;
}) {
  return (
    <div className="sidebar-box_checkbox">
      <div className="sidebar-box_title">Colors</div>
      <div className="sidebar-box_content">
        {colors ? (
          <CheckBoxGroup
            options={colors}
            selectedInfo={selectedColors}
            setSelectedInfo={setSelectedColors}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function CheckBoxGroup({
  options,
  setSelectedInfo,
  selectedInfo,
}: {
  options: any;
  setSelectedInfo: any;
  selectedInfo: any;
}) {
  // const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedInfo((prev) => [...prev, value]);
    } else {
      setSelectedInfo((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {options.map((option: any) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e)}
              value={option}
              checked={selectedInfo.includes(option)}
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

export const PriceSlider = ({
  price,
  setSelectedPrice,
}: {
  price: number[];
  setSelectedPrice: any;
}) => {
  const [minPrice, maxPrice] = price;
  console.log(minPrice, maxPrice);

  console.log(price);
  return (
    <div className="sidebar-box_price" style={{ width: "100%" }}>
      <div className="sidebar-box_title">Price</div>
      <div className="sidebar-box_content" style={{ width: "100%" }}>
        {price ? (
          <RangeSlider
            min={0}
            max={1500}
            defaultValue={[0, 1500]}
            onInput={(e: any) => {
              setSelectedPrice(e);
            }}
          />
        ) : (
          "..."
        )}
      </div>
    </div>
  );
};

export default ProductsSideBar;
