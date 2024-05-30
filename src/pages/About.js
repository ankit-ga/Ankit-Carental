import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Card from "../components/Whyus/Card";
import one from "../components/asset/self.jpg";
import two from "../components/asset/6.png";
import three from "../components/asset/comfort.png";
import hatch from '../components/asset/cars/etiostoyota.jpg';
import sedan from '../components/asset/cars/maruticiaz.webp';
import mpv from '../components/asset/cars/innova.webp';
import suv from '../components/asset/cars/renaultduster.jpg';
import './About.css';
const About = () => {
  return (
    <>
      <div className="hd">ABOUT US</div>
      <div className="carb"><Link to="/register" style={{color:"black"}}>REGISTER</Link> OR 
      <Link to="/login" style={{color:"black"}}>LOGIN</Link> TO BOOK YOUR CAR !!!!</div>
      <div className="abt">
        GET YOUR'S is a newly established self drive car rental service launched by
        young businessmen who are in such services since many years abroad. As a
        successful service abroad, the motive is to bring the same concept in
        India and get people drive miles with their personal space and freedom
        in convenient and luxurious manner. We at GET YOUR'S, carry a concept of
        farsighted visuality that will help the travel industry attain another
        level of comfort and secure zone. Our target is to make you feel happy
        and free when you drive. At GET YOUR'S, you can hire a perfect car that
        matches your need for short or long term duration. Whether you wish to
        spend the day shopping, or a luxury car for a Corporate events, for
        business travel or weekend trips, GET YOUR'S will adapt to your exact needs
        with the best quality.
      </div>
      <div className="second">GALLERY</div>
        <div className="gall">
            <div>
            <img className="carimage" src={hatch} alt="pic"></img>
            <p className="mod">Hatchback</p>
            </div>
            <div>
            <img className="carimage" src={sedan} alt="pic"></img>
            <p className="mod">Sedans</p>
            </div>
            <div>
            <img className="carimage" src={mpv} alt="pic"></img>
            <p className="mod">MPV</p>
            </div>
            <div>
            <img className="carimage" src={suv} alt="pic"></img>
            <p className="mod">SUV</p>
            </div>
        </div> 
        <div className="second">SERVICES OFFERED</div>
        <div className="wrapper">
        <Card
        pic={one}
        name="Self Drive Car Rental"
        />
         <Card
        pic={two}
        name="All India Permit"
        />
         <Card
        pic={three}
        name="Comfortability and Security"
        />
        </div>
      <Footer />
    </>
  );
};

export default About;
