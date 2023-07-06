import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { baseUrl } from "../../redux/baseURL";

function Topbar() {
  return (
    <div className="topbar_container">
      <Navbar expand container fixed="top" color="dark" dark>
        <NavbarBrand>
          <NavLink to="/">
            <img
              className="topbar_logo"
              src={baseUrl + "images/react.png"}
              alt=""
            />
          </NavLink>
        </NavbarBrand>
        <NavbarBrand>
          <NavLink className="topbar_links" to="/">
            Tech React
          </NavLink>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavbarBrand>
            <NavLink className="topbar_links" to="/archives">
              Archives
            </NavLink>
          </NavbarBrand>
          <NavbarBrand>
            <NavLink className="topbar_links" to="/career">
              Career
            </NavLink>
          </NavbarBrand>
          <NavbarBrand>
            <NavLink className="topbar_links" to="/events">
              Events
            </NavLink>
          </NavbarBrand>
          <NavbarBrand>
            <NavLink className="topbar_links" to="/contact">
              Contact
            </NavLink>
          </NavbarBrand>
        </Nav>
        <NavbarBrand>
          <SearchBar />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Topbar;
