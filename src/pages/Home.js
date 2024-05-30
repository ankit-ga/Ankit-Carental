import React from "react";
import Gallery from '../components/Whyus/Gallery';
import Whyus from '../components/Whyus/Whyus';
import Footer from '../components/Footer/Footer';
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
         <div className="carb"><Link to="/register" style={{color:"black"}}>
            REGISTER</Link> OR <Link to="/login" style={{color:"black"}}>LOGIN</Link>
             TO BOOK YOUR CAR !!!!
        </div>
        <div>
         <Gallery/>
         </div>
         <Whyus/>
         <Footer/>
        </>
    );
}

export default Home;