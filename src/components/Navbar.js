import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5" id="userNavbar">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        
          <img src={logo} alt="store" className="navbar-brand" />
       
        <ul className="navbar-nav align-items-center" >
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" id="mobileHomeButton">
              Home
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/cart" className="nav-link" id="mobileCartButton">
              Cart
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="#" className="nav-link" id="mobileOrderButton">
              My Order
            </Link>
          </li>
        </ul>
        <Link to="/Login" className="ml-auto nav-link" id="logoutButton">
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

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
