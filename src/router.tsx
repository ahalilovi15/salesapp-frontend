import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./routes/Login";
import Homepage from "./routes/Homepage";
import Signup from "./routes/Signup";
import Header from "./components/Header";
import Shoe from "./routes/Shoe";
import Cart from "./routes/Cart";
import AddShoes from "./routes/AddShoes";
const Router = () => {
  return (
   
    
      <BrowserRouter>
        
        <Header/>
        <Route path="/login" component={Login} exact />
        <Route path="/homepage" component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/shoe" component={Shoe} />
        <Route path="/cart" component={Cart} />
        <Route path="/add" component={AddShoes} />
      </BrowserRouter>

    
   
  );
};

export default Router;
