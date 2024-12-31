import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <nav className="navbar">
      <div>
        <Link to={"/"} className="link">
          <h1>React Redux Shopping Cart (GIT)</h1>
        </Link>
      </div>
      <ul className="nav-right">
        <Link to={"/"} className="link">
          <li>Home</li>
        </Link>
        <Link to={"/cart"} className="link">
          <li className="cart"><FaCartShopping/><span className="cart-span">{cart?.length >0 ? cart.length : ''}</span></li>
          
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
