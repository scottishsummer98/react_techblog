import React, { Component } from "react";
import logo from "../../assets/react.png";
import { BiCopyright } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsLinkedin, BsTelegram } from "react-icons/bs";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer_container">
          <div className="footer_columns">
            <div className="footer_items">
              <img className="footer_logo" src={logo} alt="Logo" />
              <h4>Tech React</h4>
              <p>
                <BiCopyright />
                <a
                  style={{
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                    fontSize: "medium",
                  }}
                  href="https://github.com/scottishsummer98"
                >
                  scottishsummer98
                </a>
              </p>
            </div>
            <div className="footer_items">
              <h4>Company</h4>
              <h6>Archives</h6>
              <h6>Career</h6>
              <h6>Events</h6>
              <h6>Contact</h6>
            </div>
            <div className="footer_items">
              <h4>Further Information</h4>
              <h6>Terms & Condition</h6>
              <h6>Privacy Policy</h6>
            </div>
            <div className="footer_items">
              <h4>Follow Us</h4>
              <div className="footer_socials">
                <h6>
                  <BsFacebook />
                </h6>
                <h6>
                  <BsTwitter />
                </h6>
                <h6>
                  <BsLinkedin />
                </h6>
                <h6>
                  <BsTelegram />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
