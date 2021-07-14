import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./routes/Login";
import Homepage from "./routes/Homepage";
import Signup from "./routes/Signup";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Login} exact />
        <Route path="/homepage" component={Homepage} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>

    </div>
  );
};

export default Router;
