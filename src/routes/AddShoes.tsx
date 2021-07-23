import React, { useState } from "react";
import axios from 'axios';
import { updateLanguageServiceSourceFile } from "typescript";
import { useHistory } from "react-router-dom";
const AddShoes = () => {
    const routerHistory = useHistory();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const add = () => {
        axios.post("http://localhost:3001/shoes", {
            title: title, 
            description: description,
            rating: rating, 
            image: image, 
            price: price
        })
        .then((response) => {
            routerHistory.push('/homepage');
        })
        .catch(error => console.error("Error"))
    }
    const updateTitle = (val: any) => {
        setTitle(val.target.value);
      }
    const updateDescription = (val: any) => {
        setDescription(val.target.value);
      }
    const updateImage = (val: any) => {
        setImage(val.target.value);
      }
    const updatePrice = (val: any) => {
        setPrice(val.target.value);
      }
    const updateRating = (val: any) => {
        setRating(val.target.value);
      }
  return <div className="addshoes-page">
    <form  onSubmit={(e) => {e.preventDefault(); add(); }}>
    <div className="addshoes-form">
    <div className="addshoes-labels">
    <label>Title :</label>
    <label>Description :</label>
    <label>Price :</label>
    <label>Rating :</label>
    <label>Image :</label>
    
    </div>
    <div className="addshoes-inputs">
    <input className="addshoes-input" type="text" onChange={evt => updateTitle(evt)}></input>
    <input className="addshoes-input" type="text" onChange={evt => updateDescription(evt)}></input>
    <input className="addshoes-input" type="text" onChange={evt => updatePrice(evt)}></input>
    <input className="addshoes-input" type="text" onChange={evt => updateRating(evt)}></input>
    <input className="addshoes-input" type="text" onChange={evt => updateImage(evt)}></input>
    <button className="add-button">Add shoes</button>
    </div>
    </div>
    
    </form>
  </div>;

};

export default AddShoes;
