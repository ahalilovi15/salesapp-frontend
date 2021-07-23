import React, { useState } from "react";
import axios from 'axios';
import "./css/AddShoes.css";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NAME } from "../actions";
import ShoesList from "../components/ShoesList";
import { useHistory } from "react-router-dom";
const Homepage = () => {
  const routerHistory = useHistory();
  const [num, setNum] = useState(1);
  const name = `Ime ${num}`;
  const dispatch = useDispatch();
  const addShoe = () => {
    routerHistory.push('/add');
  }
  const handleClick = () => {
    dispatch({
      type: UPDATE_NAME,
      payload: {
        fullName: name
      }
    });
    setNum(num+1);
  }
  const selector = useSelector((state : any) =>  state.reducer.fullName)
  console.log(selector);
  return <div>
    <button className="add-button" onClick={addShoe}>Add new shoes</button>
    <ShoesList></ShoesList>
  </div>;
};

export default Homepage;
