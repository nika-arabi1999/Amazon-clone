import React from "react";
import Header from "../components/header/Header";

function HomeLayout({ children }:{children:React.ReactNode}) {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
}

export default HomeLayout;
