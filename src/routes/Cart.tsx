import React, { useState } from "react";
import axios from 'axios';
import "./css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const [shoes, setShoes] = useState([]);
  const userSelector = useSelector((state : any) =>  state.reducer)
  console.log("hey", userSelector.id)
  const user : any = {
    
      id: userSelector.id
    
    
  }
  console.log(user)
  React.useEffect(() => {
    console.log("radil ovo", user);
    axios.get(`http://localhost:3001/usersshoes/${userSelector.id}`)
    .then((response) => {
      console.log("Odg",response.data);
        setShoes(response.data);
        console.log("ovo su patike alooo",shoes);
    
    })
    .catch(error => console.error("Error"))
}, []);
    

    const cartSelector = useSelector((state : any) =>  state.cartReducer)
    console.log(cartSelector);
    
  return <div className="cart-page">
      <div className="shoe-card">
          <p>ITEMS IN CART:</p>
          <div className="items">
          <ol>
          {
        shoes.map((shoe : any) => {
          return <div className="cart-item">
            <div className="cart-li">
            <li></li>
            </div>
            <div className="cart-title">
            <p>Title: {shoe.title}</p>
            </div>
            <div>
            <p className="cart-price">Price: {shoe.price}€</p>
            </div>
          </div>;
        })
      }
      </ol>
      </div>
      <button >Purchase Items</button>  
      </div>
      
  </div>;

};

export default Cart;
