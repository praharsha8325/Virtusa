import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Adminnav from "./components/admin/AdminNav/Adminnav.jsx";
import Addprocuct from "./components/admin/AddProduct/Addproduct.jsx";
class App extends Component {
  
  state = {
    loggedIn:false
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn ? <Navbar /> : null};
        <Switch>
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/Admin/AdminNav" component={Adminnav} /> 
          <Route exact path="/Admin/AddProduct" component={Addprocuct} /> 
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
