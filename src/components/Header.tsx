import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NAME } from "../actions";
import cart from "./shopping-cart.png"
const Header = () => {
    const dispatch = useDispatch();
    const [content, setContent] = React.useState("SALES APP");
    const selector = useSelector((state : any) =>  state.reducer);
    
  console.log(selector);
  return (

    <nav>
      <p> {selector.name ? `Welcome, ${selector.name} ${selector.lname}!` : content}</p>
      {selector ? 
      (<div className="right-side">
      <NavLink activeClassName="cart" to="/cart">
      <img className="cart-img"src={cart} width = "20" ></img>

      </NavLink>
      <NavLink activeClassName="logout" to="/login">
       <p>Log out</p>
      </NavLink>
      </div>) : null}
    </nav>
  );
}
export default Header;