import React, { useState } from "react";
import axios from 'axios';
import "./css/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    axios.post("http://localhost:3001/login", {email: email, password: password})
        .then((response) => {
          console.log(response);
          if(response.status == 200)
          window.location.replace("/homepage");
        })
        .catch(error => console.error("Error"))
  }

  const updateEmail = (val: any) => {
    setEmail(val.target.value);
  } 
  
  const updatePassword = (val: any) => {
    setPassword(val.target.value);
  } 

  const signup = () => {
    window.location.replace("/signup");
  }

  return <div className="login">

    <form action="post" onSubmit={(e) => {e.preventDefault(); login(); }}>
    <div className="formElements">
    <div className="labels">
    <label> Email :</label>
    <label>Password :</label>
    
    </div>
    <div className="inputs">
    <input className="input" type="email" onChange={evt => updateEmail(evt)}></input>
    <input className="input" type="password" onChange={evt => updatePassword(evt)}></input>
    </div>
    </div>
    <button className="loginButton" >Log in</button>
    </form>
    <div className="signup">
    <p>Don't have an account?</p>
    <button onClick={signup}>Sign up</button> 
    </div>
  </div>;
};

export default Login;
