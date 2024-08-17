import { Children, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SidebarSheet.scss";

function SidebarSheet({
  children,
  showSheet,
  setShowSheet,
  top,
  width = "75vw",
  
}: {
  children: ReactNode;
  showSheet: boolean;
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
  top?: string
  width?: string
}) {
  return (
    <div className="sheet" style={{top: top}}>
      <div
        className={`${!showSheet ? "sheet-close" : ""} sheet-backdrop`}
        onClick={() => setShowSheet(false)}
      ></div>

      <div className={`${!showSheet ? "sheet-close" : ""} sheet-content`} style={{width: width}}>
        {children}
        <span className="close-box-icon"    onClick={() => setShowSheet(false)}>
          <CloseIcon sx={{ fontSize: 40, color: "#fff" }} />
        </span>
      </div>
    </div>
  );
}

export default SidebarSheet;
