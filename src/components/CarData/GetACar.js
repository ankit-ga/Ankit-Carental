import React, {useState}from "react";
import {Link} from "react-router-dom";
import manual from '../asset/manual.jpg';
import seat from '../asset/seat.png';
import petrol from '../asset/petrol.png';
import { db } from '../../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/Authcontext';
const GetACar=(item)=>{

    const [saved, setSaved] = useState(false);
   
    const {user} = UserAuth();
    const carID = doc(db, 'users', `${user?.email}`);

    const saveCar = async () => {
        if (user?.email) {
          
          setSaved(true);
          await updateDoc(carID, {
            savedCar: arrayUnion({
              id: item.id,
              imgsrc: item.imgsrc,
              segment:item.segment,
              brand:item.brand,
              model:item.model,
              price:item.price,
              transmission:item.transmission,
              seats:item.seats,
              engine:item.engine,
            }),
          });
        } else {
          alert('Please login or register to book a car');
        }
      };
    return(
      
        <div className="element_grid">          
                         <div className="container">
                         
                <div className="upper">
                    <div className="picture">
                        <img src={item.imgsrc}  className="brand" alt="pic"></img>
                    </div>
                    <div className="details">
                        <div className="type">{item.segment}</div>
                        <div className="model">{item.brand}</div>
                        <div className="name">{item.model}</div>
                        <div className="price">Per Day <br/><span className="num">&#8377; {item.price}</span> </div>
                       <Link to="/bookingdetails"><button className="booknow" onClick={saveCar}>Book now</button></Link>
                    </div>
                </div>
                <div className="lower">
                    <div className="layer">
                    <div className="segment">
                        <img src={manual} className="kar" alt="pic"></img>
                     <div className="sp">{item.transmission}</div>
                    </div>
                    <div className="seats">
                        <img src={seat} className="kar" alt="pic"></img>
                        <div className="sp">{item.seats}</div>
                    </div>
                    <div className="petrol">
                        <img src={petrol} className="kar" alt="pic"></img>
                        <div className="sp">{item.engine}</div>
                    </div>
                    </div>
                </div>
            </div>
           </div>
            )
}
export default GetACar;