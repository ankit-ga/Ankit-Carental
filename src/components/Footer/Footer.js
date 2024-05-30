import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import pic from "../asset/two.jfif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="inner">
            <div>
                <img className="imag" src={pic} alt="pic"></img>
            </div>
              
                            <div className="services">
                            <ul>
                                <li>SERVICES</li>
                                <br></br>
                                <li>Self Drive</li>
                                <li>Comfort and Security</li>
                                <li>All India Permit</li>
                                <li>Special discounts</li>

                            </ul>
                            </div>
                            <div className="about">
                            <ul>
                                <li>ABOUT</li>
                                <br></br>
                                <li><Link to="/about" className="gety">About Us</Link></li>
                                <li><Link to="/faq" className="faq">FAQS</Link></li>
                                <li><Link to="/terms" className="terms">Terms and Conditions</Link></li>
                            </ul>
                            </div>
               
                <div className="follow">
                    <p>Follow us on</p>
                            <div className="icon">
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter />
                            <br/><br/>
                            </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
