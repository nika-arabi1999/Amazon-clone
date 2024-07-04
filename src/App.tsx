import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { homeRoutes, productsRoutes } from "./routes";
import HomeLayout from "./components/layouts/home";
import AppRoute from "./routes/AppRoute";
import ProductsLayout from "./components/layouts/products";

function App() {
  // const { data, isLoading } = useGetCategoriesQuery();
  // console.log(data);

  return (
    <Routes>
      {homeRoutes.map((route) => {
        return (
          <Route path="" element={<AppRoute Layout={HomeLayout}/>}>
            <Route path={route.path} element={<route.element />} />
          </Route>
        );
      })}
      {productsRoutes.map((route) => {
        return (
          <Route path="" element={<AppRoute Layout={ProductsLayout}/>}>
            <Route path={route.path} element={<route.element />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
