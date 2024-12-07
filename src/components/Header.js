import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-100 shadow-lg">
      <div className="w-[150px]">
        <img src={LOGO_URL} className="logo-icon" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
