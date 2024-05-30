import React from "react";
import './Card.css';
const Card=(props)=>{
    return(
        <>
        <div className="mine">
            <div className="image">
            <img className="pic" src={props.pic} alt="pic"></img>
            </div>
            <div className="cont">
                {props.name}
            </div>
        </div>
        </>
    );
}

export default Card;