import { Avatar } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./MenuSheet.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { mockApi } from "../../../../services/mockApi";
import { category } from "../../../../services/types";

// const categories = [
//   {
//     title: "Shop by Department",
//     categories: [
//       "Electronics",
//       "Computers",
//       "Smart Home",
//       "Arts and Crafts",
//       "video games",
//     ],
//   },
//   {
//     title: "Digital Content & Devices",
//     categories: ["Electronics", "Computers", "Smart Home", "Arts and Crafts"],
//   },
//   {
//     title: "Programs & Features",
//     categories: ["Electronics", "Computers", "Smart Home", "Arts and Crafts"],
//   },
// ];
function MenuSheet({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const { data } = useGetCategoriesQuery();
  // const categories = data?.data;
  const [categories, setCategories] = useState<category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch products based on a category
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categories = await mockApi.getCategories(); // Example: Fetching categories from "Electronics"
        setCategories(categories);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <div>is Loading...</div>;
  }
  if (error) {
    return <>an error occured!</>;
  }
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
          {categories?.map((category) => {
            return (
              <li>
                <Link
                  to={`/products/${category.id}`}
                  className="menu-content_box_item"
                  onClick={() => setShowMenu(false)}
                >
                  {" "}
                  <p>{category.name}</p>
                  <ChevronRightIcon sx={{ fontSize: 30, color: "#bbbbbb" }} />
                </Link>
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
