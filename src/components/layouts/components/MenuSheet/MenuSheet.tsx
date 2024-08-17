import { Avatar } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./MenuSheet.scss";
import { lightGreen } from "@mui/material/colors";

const categories = [
  {
    title: "Shop by Department",
    categories: [
      "Electronics",
      "Computers",
      "Smart Home",
      "Arts and Crafts",
      "video games",
    ],
  },
  {
    title: "Digital Content & Devices",
    categories: ["Electronics", "Computers", "Smart Home", "Arts and Crafts"],
  },
  {
    title: "Programs & Features",
    categories: ["Electronics", "Computers", "Smart Home", "Arts and Crafts"],
  },
];
function MenuSheet() {
  return (
    <div className="menu">
      <div className="menu-hello">
        <Avatar
          sx={{
            width: "30px",
            height: "auto",
            aspectRatio: "1",
            color: "#222f3e",
            background: "#fff",
          }}
        />
        <span>Hello, sign in</span>
      </div>
      <div className="menu-content">
        <div className="menu-content_box box-department">
          <h4>Shop By Department</h4>
          {categories[1].categories.map((category) => {
            return (
              <li className="menu-content_box_item">
                <p>{category}</p>
                <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
              </li>
            );
          })}
        </div>
        <div className="menu-content_box box-digital">
          <h4>Digital Content & Devices</h4>
          <li className="menu-content_box_item">
            <p>Amazon Music</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
          <li className="menu-content_box_item">
            <p>AppStore for android</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
          <li className="menu-content_box_item">
            <p>Kindle Books</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
        </div>
        <div className="menu-content_box box-programs">
          <h4>Programs & Features</h4>
          <li className="menu-content_box_item">
            <p>Amazon Music</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
          <li className="menu-content_box_item">
            <p>AppStore for android</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
          <li className="menu-content_box_item">
            <p>Kindle Books</p>
            <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
          </li>
        </div>
      </div>
    </div>
  );
}

export default MenuSheet;
