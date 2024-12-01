import "./header.scss";
import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useZustandStore } from "../../../../services/store";
import { useNavigate } from "react-router-dom";

export default function Header({
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
  return (
    <div className={`search ${device}`}>
      <div className="search_box search_box__category">
        <select
          name="categories"
          id="1"
          className="search_item search_item__select"
        >
          <option value="all">All</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="search_box search_box__input">
        <input
          type="text"
          className="search_item search_item__input"
          placeholder="Search Amazon"
        />
      </div>
      <div className="search_box search_box__btn">
        <button className="search_item search_item__btn">
          <Search fontSize="large" />
        </button>
      </div>
    </div>
  );
}
