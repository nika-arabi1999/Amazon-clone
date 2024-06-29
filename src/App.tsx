import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useGetCategoriesQuery } from "./services/dashboardApi";
import Home from "./pages/Home";

function App() {
  // const { data, isLoading } = useGetCategoriesQuery();
  // console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
