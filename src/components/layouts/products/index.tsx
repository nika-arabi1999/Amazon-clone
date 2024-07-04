import React from "react";
import Header from "../components/header/Header";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div style={{display:"flex",}}>
        <div className="sidebar" >sidebar</div>
        <div className="">{children}</div></div>
    </div>
  );
}

export default ProductsLayout;
