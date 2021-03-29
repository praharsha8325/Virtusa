import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../logo.svg";
import { ButtonContainer } from "../../Button";
export default class Adminnav extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5" id="adminNavbar">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        
          <img src={logo} alt="store" className="navbar-brand" />
       
        <ul className="navbar-nav align-items-center" >
          <li className="nav-item ml-5">
            <Link to="#" className="nav-link" id="adminproductButton">
            <i class="fa fa-shopping-cart" />
              Products
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="#" className="nav-link" id="adminOrderButton">
            <i class="fas fa-truck" />
              Orders
            </Link>
          </li>
         
        </ul>
        <Link to="#" className="ml-auto nav-link" id="logoutButton">
        <i class="fas fa-sign-out-alt"></i>
           Logout 
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

