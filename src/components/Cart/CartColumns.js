import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block" style={{backgroundColor:"#00FF00", borderRadius:"10px"}}>
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col-10 offset-lg-3 col-lg-2">
            <p className="text-uppercase">Product Name</p>
          </div>
          <div className="col-10 col-lg-2">
            <p className="text-uppercase">Product Price</p>
          </div>
          <div className="col-10 col-lg-2">
            <p className="text-uppercase">Quantity</p>
          </div>
          
        </div>
      </div>
    );
  }
}
