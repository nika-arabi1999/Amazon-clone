import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { homeRoutes } from "./routes";
import HomeLayout from "./components/layouts/home";
import AppRoute from "./routes/AppRoute";

function App() {
 

  return (
    <Routes>
      {homeRoutes.map((route) => {
        return (
          <Route path="" element={<AppRoute Layout={HomeLayout} />}>
            <Route path={route.path} element={<route.element />} />
          </Route>
        );
      })}
    </Routes>
    
  );
}

export default App;
