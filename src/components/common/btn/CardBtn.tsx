import { ButtonBaseProps } from "@mui/material";
import "./CardBtn.scss"

 function CardBtn({
    children,
    ...props
  }: { variant?: "primary" | "secondary" | "white"} & ButtonBaseProps) {
    return (
      <button {...props}>
        {children}
      </button>
    );
  }
  export default CardBtn;