import React from "react";
import pic from '../components/asset/flogo.png';
import {Link} from 'react-router-dom';
import './PageNotFound.css';
const Confirmbooking=()=>{
    return(
        <>
        <div className="error_logo">
            <img className="error_img" src={pic} alt="Get Your's"></img>
        </div>
    <div className="error_container">
        <div className="error_four" style={{fontSize:"140px"}}>Booking Confirmed</div>
        <h1 className="error_occur">Thank you for choosing us.</h1>
        <Link to="/"><button className="error_btn">Back To Home</button></Link>
    </div>
        </>
    )

}

export default Confirmbooking;