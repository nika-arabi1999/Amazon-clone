import "./header.scss";
import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useZustandStore } from "../../../../services/store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { categories, products } from "../../../../services/staticData";
import { product } from "../../../../services/types";

function TopHeader({
  setShowSheet,
}: {
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const { data: cart} = useGetCartQuery("cart_ypbroEGWOVl8n4");
  const cart = useZustandStore((state) => state.cart);
  console.log(cart);
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav_row nav_row__up">
        <div className="nav_row__left">
          <span
            onClick={() => setShowSheet(true)}
            style={{ cursor: "pointer" }}
            className="menuIcon-span"
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </span>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            style={{ width: "70px" }}
          />
        </div>
        <NavSearch device={"desktop"} />
        <div className="nav_row__right">
          <a href="#">Sign In</a>
          <a href="#">
            <PersonIcon sx={{ fontSize: 35 }} />
          </a>
          <a href="#" className="cart-icon">
            {cart?.total_items ? (
              <span className="cart-span">{cart?.total_items}</span>
            ) : (
              ""
            )}
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 35 }}
              onClick={() => navigate("/cart")}
            />
          </a>
        </div>
      </div>
      <div className="nav_row nav_row__down">
        <NavSearch device={"mobile"} />
      </div>
    </nav>
  );
}

function NavSearch({ device }: { device: string }) {
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [categoryTerm, setCategoryTerm] = useState<string>("all");
  const [searchedProducts, setSearchedProducts] = useState<product[] | null>(
    products.slice(0, 5)
  );
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}&searchCategory=${categoryTerm}`);
  };

  const [value] = useDebounce(searchTerm, 300);
  const handleSuggestion = (value: string | null) => {
    if (value) {
      const searchedItems: product[] = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setSearchedProducts(searchedItems);
    }
    return;
  };
  useEffect(() => {
    handleSuggestion(value);
  }, [value]);
  return (
    <div className={`search ${device}`}>
      <div className="search_box search_box__category">
        <select
          name="categories"
          id="1"
          className="search_item search_item__select"
          onChange={(e) => setCategoryTerm(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => {
            return <option value={category.id}>{category.name}</option>;
          })}
        </select>
      </div>
      <div className="search_box search_box__input">
        <input
          type="text"
          className="search_item search_item__input"
          placeholder="Search Amazon"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowList(true);
          }}
          onClick={() => setShowList(true)}
        />
        {showList && (
          // <div className="list-backdrop">
          <div
            className="search_item search_item__list"
            onMouseLeave={() => setShowList(false)}
          >
            {searchedProducts?.map((product) => (
              <Link to={`/singleProduct/${product.product_id}`}>
                {product.name}
              </Link>
            ))}
          </div>
          // </div>
        )}
      </div>
      <div className="search_box search_box__btn">
        <button className="search_item search_item__btn" onClick={handleSearch}>
          <Search fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default TopHeader;
