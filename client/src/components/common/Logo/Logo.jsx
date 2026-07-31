import { Link } from "react-router-dom";
import logo from "../../../assets/logos/easykart-logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center transition-transform duration-200 hover:scale-105"
    >
      <img
        src={logo}
        alt="EasyKart Logo"
        className="h-16 w-auto cursor-pointer object-contain"
      />
    </Link>
  );
}

export default Logo;