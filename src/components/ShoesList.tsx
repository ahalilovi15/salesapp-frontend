import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { SET_SHOE } from "../actions";
import axios from 'axios';
import "./css/ShoesList.css"
interface P{
    title: String,
    description: String,
    price: number,
    total: number

}

const ShoesList = () => {
    const [shoes, setShoes] = useState<P[]>([]);
    const routerHistory = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3001/shoes?title=")
        .then((response) => {
          console.log(response);
            setShoes(response.data);
            
        
        })
        .catch(error => console.error("Error"))
    }, []);
    
    const openShoe = (shoe : any) => {
      dispatch({
        type: SET_SHOE,
        payload: {
          id: shoe.id,
          title: shoe.title,
          description: shoe.description,
          rating: shoe.rating,
          price: shoe.price,
          image: shoe.image
        
        }
      });
      routerHistory.push('/shoe');
    }

    return <div >
        <p className="title-title">OUR NEWEST PRODUCTS</p>
        <div className="shoes">
      {
        shoes.map((shoe : any) => {
          return <div className="shoe" onClick={()=>openShoe(shoe)}>
            
            <img src={shoe.image} width = "200" ></img>
            <p className="title">{shoe.title}</p>
            <p className="price">Price: {shoe.price}€</p>
            
          </div>;
        })
      }
    </div>
    </div>;
  };

export default ShoesList;