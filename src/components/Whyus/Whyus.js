import React from "react";
import Card from './Card.js';
import "./Whyus.css"
import one from "../asset/1.png";
import two from "../asset/2.png";
import three from "../asset/3.jpg";
import four from "../asset/4.png";
import five from "../asset/5.png";
import six from "../asset/6.png";
const Whyus=()=>{
    return(
        <><div className="why">
        <div className="first" >
            <Card 
            pic={one}
            name="Affordable Price Guarantee"/>
             <Card 
            pic={two}
            name="24 X 7 dedicated Assistance and Support System "/>
             <Card 
            pic={three}
            name="Variety of Options Available"/>
            </div>
            <div className="first">
              <Card 
            pic={four}
            name="Special Discounts on Occassions"/>
              <Card 
            pic={five}
            name="Premium Quality of Cars"/>
              <Card 
            pic={six}
            name="All India Permit"/>
        </div>
        </div></>
    );
}
export default Whyus;