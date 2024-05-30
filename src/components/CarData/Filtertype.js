import React, { useState } from "react";
import "./Filtertype.css";
import Cardata from "./Cardata";
import GetACar from "./GetACar";
const Filtertype=()=>{
    const[items,setItems]=useState(Cardata);
    const filterItem=(catItem)=>{
            const updatedItems=Cardata.filter((curelem)=>{
                return (curelem.segment===catItem || curelem.transmission===catItem || curelem.seats===catItem ||curelem.engine===catItem);
            });
            setItems(updatedItems);
    }

const ncard=(val)=>{
    return(
    <GetACar
    id={val.id}
    imgsrc={val.imgsrc} 
    segment={val.segment}
    brand={val.brand}
    model={val.model}
    price={val.price}
    transmission={val.transmission}
    seats={val.seats}
    engine={val.engine}/>
    )
}
    return(
        <>
<div className="whole_wrapper">
    
    <div className="btn_wrapper">
    <p className="filter_head">Filter your Choice !!!</p>
    <button className="filter_btn all_btn" onClick={()=>setItems(Cardata)}>ALL</button>
            <div className="menu_tabs">
                <div className="menu_name">CAR SEGMENT</div>
                <div className="container_menu">
                    <button className="filter_btn" onClick={()=>filterItem('Hatchback')}>Hatchback</button>
                    <button className="filter_btn" onClick={()=>filterItem('Sedan')}>Sedan</button>
                    <button className="filter_btn" onClick={()=>filterItem('MPV')}>MPV</button>
                    <button className="filter_btn" onClick={()=>filterItem('SUV')}>SUV</button>
                </div>
            </div>
            <div className="menu_tabs">
                <div className="menu_name">CAR TRANSMISSION</div>
                <div className="container_menu">
                    <button className="filter_btn" onClick={()=>filterItem('Manual')}>Manual</button>
                    <button className="filter_btn" onClick={()=>filterItem('Automatic')}>Automatic</button>
                </div>
            </div>
            <div className="menu_tabs">
                <div className="menu_name">NO. OF SEATS </div>
                <div className="container_menu">
                    <button className="filter_btn" onClick={()=>filterItem('5')}>5-Seater</button>
                    <button className="filter_btn" onClick={()=>filterItem('7')}>7-seater</button>
                </div>
            </div>
            <div className="menu_tabs">
                <div className="menu_name">FUEL TYPE</div>
                <div className="container_menu">
                    <button className="filter_btn" onClick={()=>filterItem('Petrol')}>Petrol</button>
                    <button className="filter_btn" onClick={()=>filterItem('Diesel')}>Diesel</button>

                </div>
            </div>
            </div>

<div className="element_grid">
            { items.map(ncard)} 
            </div></div>
        </>
    );
}
export default Filtertype;