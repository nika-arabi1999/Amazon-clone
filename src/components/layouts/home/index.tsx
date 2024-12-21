import React, { useState } from "react";
import SidebarSheet from "../components/SidebarSheet/SidebarSheet";
import MenuSheet from "../components/MenuSheet/MenuSheet";
import Header from "../components/header/Header";

function HomeLayout({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Header
        setShowSheet={setShowMenu}
       
      />
      <SidebarSheet showSheet={showMenu} setShowSheet={setShowMenu} top="0">
        <MenuSheet />
        {/* menu list */}
      </SidebarSheet>
      {children}
    </div>
  );
}

export default HomeLayout;
