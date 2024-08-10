import React from "react";
import Header from "../components/header/Header";
import ProductsSideBar from "./components/sidebar";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <ProductsSideBar />
        {children}
      </div>
    </div>
  );
}

export default ProductsLayout;
