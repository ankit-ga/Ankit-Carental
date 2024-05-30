import React from "react";
import './Header.css';
import { NavLink,Outlet,useNavigate } from "react-router-dom";
import pic from "../components/asset/flogo.png";
import { UserAuth } from '../context/Authcontext';

const Header=()=>{
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <>
            <div className="base">
                <div className="nav">
                    <ul className="nav_items">
                        <li><NavLink to="/" className="item">Home</NavLink></li>
                        <li ><NavLink to="/about" className="item">About Us</NavLink></li>
                        <li ><NavLink to="/bookacar" className="item">Car Gallery</NavLink></li>
                        <li ><NavLink to="/contact" className="item">Contact</NavLink></li>
                        {user?.email ? (
                            <>
                            <li>
                            <NavLink to='/bookingdetails' >
                            <button
                                style={{borderRadius:"5px",fontSize:"large",padding:"5px",width:"150px",cursor:"pointer"}}
                            > Book Now
                            </button>
                            </NavLink>
                            </li>
                            <li>
                            <button
                                onClick={handleLogout}
                                style={{borderRadius:"5px",fontSize:"large",padding:"5px",width:"100px",cursor:"pointer"}}
                            > Logout
                            </button>
                            </li>
                            </>
                        ) : (
                            <>
                            <li>
                            <NavLink to='/login' className="item">
                                Login
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to='/register' className="item">
                                Register 
                            </NavLink>
                            </li>
                            </>
                        )}
                    </ul>
                </div>
                <div>
                <img className="logo" src={pic} alt="pic"></img><br/>
                <span className="logo_name"> GET YOUR'S</span>
                </div>
            </div>
            <Outlet/>
        </>
    );
}
export default Header;