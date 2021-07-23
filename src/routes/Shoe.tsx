import React, { useState } from "react";
import axios from 'axios';
import "./css/Shoe.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../actions";
interface IUser {
  id: any,
  name: any,
  lname: any,
  email: any,
  password: any
}
interface IShoes {
  id: any,
  title: any,
  description: any,
  rating: any,
  image: any,
  price: any,
}
interface IUserShoes{
  user: IUser,
  shoes: IShoes
}
const Shoe = () => {
  
    const dispatch = useDispatch();
    const userSelector = useSelector((state : any) =>  state.reducer)
    const selector = useSelector((state : any) =>  state.shoeReducer)
    const cartSelector = useSelector((state : any) =>  state.cartReducer)
    const user_shoes : any = {
      user: userSelector,
      shoes: selector
    } 
    console.log(user_shoes);
    const addToCart = (title : any, price : any) => {
      //ovdje treba poslat zahtjev
      axios.post("http://localhost:3001/usersshoes", user_shoes)
        .then((response) => {
          console.log(response);
            
        
        })
        .catch(error => console.error("Error"))
      cartSelector.cart.push({title: title, price: price})
      dispatch({
        type: ADD_TO_CART,
        payload: {
          cart: cartSelector.cart
        }
      });
    }
  return <div className="shoe-page">
      <div className="shoe-card">
      <div className="shoe-first">
        <img src={selector.image} width = "400" ></img>
        <p className="shoe-title">{selector.title}</p>
        <p className="shoe-price">Price: {selector.price}€</p>
      </div>
      <div className="shoe-second">
          <p className="shoe-description">Description: {selector.description}</p>
          <p className="shoe-rating">Rating: {selector.rating}/5</p>
      </div>
      <button onClick={()=>addToCart(selector.title, selector.price)}>Add to Cart</button>  
      </div>
      
  </div>;

};

export default Shoe;
