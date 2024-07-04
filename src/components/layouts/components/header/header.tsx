import "./header.scss";
import { Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function Header() {
  return (
    <nav className="nav">
      <div className="nav_row nav_row__up">
        <div className="nav_row__left">
          <MenuIcon sx={{ fontSize: 35}} />
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            style={{ width: "70px" }}
          />
        </div>
        <NavSearch device={"desktop"} />
        <div className="nav_row__right">
          <a href="#">Sign In</a>
          <a href="#">
            <PersonIcon sx={{ fontSize: 35}} />
          </a>
          <a href="#">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 35}} />
          </a>
        </div>
      </div>
      <div className="nav_row nav_row__down">
        <NavSearch device={"mobile"} />
      </div>
    </nav>
  );
}

function NavSearch({ device }) {
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
