import { useNavigate } from "react-router-dom";
import "./404.scss";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img
        src="/images/404.png"
        alt="404NotFound"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default NotFound;
