import React, { useState } from "react";
import axios from 'axios';
import "./css/Signup.css";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const signup = () => {
        axios.post("http://localhost:3001/signup", {email: email, password: password, name: name, lname: lastName})
        .then((response) => {
          console.log(response);
          if(response.status == 200)
          window.location.replace("/login");
        })
        .catch(error => console.error("Error"))
    }
  
    const updateEmail = (val: any) => {
        setEmail(val.target.value);
      } 
      
      const updatePassword = (val: any) => {
        setPassword(val.target.value);
      } 
      const updateName = (val: any) => {
        setName(val.target.value);
      } 
      
      const updateLastName = (val: any) => {
        setLastName(val.target.value);
      } 
        
  return <div className="signup-page">
      <form  action="post" onSubmit={(e) => {e.preventDefault(); signup(); }}>
      <div  className="signup-signup">
    <div className="labels">
    <label> Name:</label>
    <label> Last name:</label>
    <label> Email:</label>
    <label>Password:</label>
    </div>
    
    <div className="signupform">
    <input type="text" onChange={evt => updateName(evt)}></input>
    
    <input type="text" onChange={evt => updateLastName(evt)}></input>
    
    <input type="text" onChange={evt => updateEmail(evt)}></input>
    
    <input type="text" onChange={evt => updatePassword(evt)}></input>
    </div>
    </div>
    <button className="signup-button">Sign Up</button>
    </form>
  </div>;
};

export default Signup;
