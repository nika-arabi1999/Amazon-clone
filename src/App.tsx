import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useGetCategoriesQuery } from "./services/dashboardApi";
import Home from "./pages/home";
import { homeRoutes } from "./routes";
import HomeLayout from "./components/layouts/home";
import AppRoute from "./routes/AppRoute";

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
    </Routes>
  );
}

export default App;
