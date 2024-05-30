import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import manual from '../components/asset/manual.jpg'
import seat from '../components/asset/seat.png';
import petrol from '../components/asset/petrol.png';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Bookingdetails.css";
import Footer from "../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';


function Bookingdetails()
 {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedCar);
      });
    }, [user?.email]);


    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((item) => item.id !== passedID)
          await updateDoc(movieRef, {
              savedCar: result
          })
        } catch (error) {
            console.log(error)
        }
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const postData=async (e) => {
    e.preventDefault();
    const  {username, aadhar,driving,address,district,pincode,state,drop,cardrop,  }=formValues;
    if(username && aadhar && driving && address && district && pincode && state && drop && cardrop){
   const res=await fetch("https://getyoursapp-default-rtdb.firebaseio.com/booking_details.json",{
     method:"POST",
     headers:{
       "Content-Type":"application/json",
     },
     body:JSON.stringify(
      {username,aadhar,driving,address,district,pincode,state,drop,cardrop }
     )
   })

   if(res){
     setFormValues({
       username:"", aadhar:"",driving:"",address:"",district:"",pincode:"",state:"",drop:"",cardrop:"",
     });
     navigate('/docupload')
     
   }
  }else{
    setFormErrors(validate(formValues));
    setIsSubmit(true) 
  }
}



  const validate = (values) => {
    const errors = {};
    const regex = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";
    const aregex = "^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$";
    const dregex =
      "^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$";

    if (!values.username) {
      errors.username = "*Name is required!";
    }

    if (!values.aadhar) {
      errors.aadhar = "*Aadhar No. is required!";
    } else if (!aregex.test(values.aadhar)) {
      errors.aadhar = "*This is not a valid Aadhar Number!";
    }

    if (!values.driving) {
      errors.driving = "*Driving License No. is required!";
    } else if (!dregex.test(values.driving)) {
      errors.driving = "*This is not a valid Driving License Number!";
    }

    if (!values.address) {
      errors.address = "*Address is required!";
    }

    if (!values.pincode) {
      errors.pincode = "*Pincode is required!";
    } else if (!regex.test(values.pincode)) {
      errors.pincode = "*This is not a valid pincode format!";
    }

    if (!values.state) {
      errors.state = "* State is required!";
    }

    return errors;
  };

  return (
      <>
<div>
  
 
</div>
    <div className="wrapper_personal">
     
      <div className="personal">CAR DETAILS</div>
      <p style={{textAlign:"center",marginTop:"40px"}}>
<Link to="/bookacar" style={{fontSize:"30px",fontWeight:"500",color:"yellow"}}>PICK YOU CAR FROM HERE</Link>
</p>
      <div style={{marginLeft:"20%"}}>
        <div className="element_grid">
            {
                movies.map((item)=>{
                    const {id,imgsrc,segment,brand,model,price,transmission,seats,engine}=item;
                    return(
                        <>
                         <div className="container" key={id}>
                         
                <div className="upper">
                    <div className="picture">
                        <img src={imgsrc}  className="brand" alt="pic"></img>
                    </div>
                    <div className="details">
                        <div className="type">{segment}</div>
                        <div className="model">{brand}</div>
                        <div className="name">{model}</div>
                        <div className="price">Per Day <br/><span className="num">&#8377; {price}</span> </div>
                       <button className="booknow" onClick={()=>deleteShow(id)}>Remove</button>
                    </div>
                </div>
                <div className="lower">
                    <div className="layer">
                    <div className="segment">
                        <img src={manual} className="kar" alt="pic"></img>
                     <div className="sp">{transmission}</div>
                    </div>
                    <div className="seats">
                        <img src={seat} className="kar" alt="pic"></img>
                        <div className="sp">{seats}</div>
                    </div>
                    <div className="petrol">
                        <img src={petrol} className="kar" alt="pic"></img>
                        <div className="sp">{engine}</div>
                    </div>
                    </div>
                </div>
            </div></>
                    )
                })
            }
            </div>
            </div>


      {/* Personal Details */}
      <div className="divider"></div><br/><br/><br/>
      <form className="formdata" method="POST">
        <div className="personal">PERSONAL DETAILS</div>

        <div className="username">
          <label className="inputlabel">Name</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.username}</p>

        <div className="aadhar">
          <label className="inputlabel">Aadhar Card No.</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="aadhar"
            placeholder="Aadhar Card no."
            value={formValues.aadhar}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.aadhar}</p>

        <div className="driving">
          <label className="inputlabel">Driving License No.</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="driving"
            placeholder="Driving License No."
            value={formValues.driving}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.driving}</p>

        <div className="address">
          <label className="inputlabel">Address</label>
          <br />
          <textarea
            className="formtextarea"
            name="address"
            placeholder="House/Apartment no. and city"
            value={formValues.address}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.address}</p>

        <div className="district">
          <label className="inputlabel">District</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="district"
            placeholder="District"
            value={formValues.district}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.username}</p>

        <div className="pincode">
          <label className="inputlabel">Pincode</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formValues.pincode}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.pincode}</p>

        <div className="state">
          <label className="inputlabel">State</label>
          <br />
          <input
            className="inputarea"
            type="text"
            name="state"
            placeholder="State"
            value={formValues.state}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.state}</p>


        {/* booking details */}
        <div className="divider"></div>
        <div className="booking_details">BOOKING DETAILS</div>
      <label className="inputlabel">Choose car</label><br/>
      <select className="dropdownmenu" name="drop" placeholder="Choose from here" value={formValues.drop} onChange={handleChange}>
          
          <option className="disabled_option" disabled value="hatchback">HATCHBACK</option>

          <option value="Maruti Suzuki SWIFT  - 5 seater">Maruti Suzuki SWIFT  - 5 seater</option>
          <option value="Toyota ETIOS  - 5 seater">Toyota ETIOS  - 5 seater</option>
          <option value="Hyundai I10 GRAND  - 5 seater">Hyundai I10 GRAND  - 5 seater</option>
          <option value="Tata TIAGO  - 5 seater">Tata TIAGO  - 5 seater</option>
          <option value="Ford FIGO  - 5 seater">Ford FIGO  - 5 seater</option>
          
          <option className="disabled_option" disabled value="sedan">SEDAN</option>
         
          <option value="Honda CITY  - 5 seater">Honda CITY  - 5 seater</option>
          <option value="Maruti Suzuki CIAZ  - 5 seater">Maruti Suzuki CIAZ  - 5 seater</option>
          <option value="Hyundai VERNA  - 5 seater">Hyundai VERNA  - 5 seater</option>
          

          <option className="disabled_option"  disabled value="mpv">MPV</option>
          <option value="Morris Garages HECTOR  - 7 seater">Morris Garages HECTOR  - 7 seater</option>
          <option value="Maruti Suzuki ERTIGA  - 7 seater">Maruti Suzuki ERTIGA  - 7 seater</option>
          <option value="Toyota INNOVA  - 7 seater">Toyota INNOVA  - 7 seater</option>

          <option className="disabled_option" disabled value="suv">SUV</option>
          <option value="Tata NEXON  - 5 seater">Tata NEXON  - 5 seater</option>
          <option value="Maruti Suzuki BREZZA  - 5 seater">Maruti Suzuki BREZZA  - 5 seater</option>
          <option value="Renault DUSTER  - 5 seater">Renault DUSTER  - 5 seater</option>
          <option value="Hyundai CRETA  - 5 seater">Hyundai CRETA  - 5 seater</option>
          <option value="Kia SELTOS  - 5 seater">Kia SELTOS  - 5 seater</option>
          <option value="Toyota FORTUNER  - 7 seater">Toyota FORTUNER  - 7 seater</option>
          <option value="Ford ENDEAVOUR  - 7 seater">Ford ENDEAVOUR  - 7 seater</option>
          
         
        </select>
        <br/><br/>


        <div className="datepick">
          <span className="fromspan">From</span>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date) && {handleChange}}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        name="startdate"
        value={formValues.date}
      />
      <span className="tospan">To</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date) && {handleChange}}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        name="enddate"
        value={formValues.date}
      />
    </div>

    <div className="addressed">
          <label className="inlabel">Car Drop Location</label>
          <textarea
            className="formtxtarea"
            name="cardrop"
            placeholder="House/Apartment no. city and district"
            value={formValues.cardrop}
            onChange={handleChange}
          />
        </div>
        <p className="formpara">{formErrors.address}</p>
       <button className="detailsbtn" onClick={postData}>Submit</button>
        <br />
        <br />

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="mes">Your Feedback is submitted !!!</div>
        ) : (
          <p></p>
        )}
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Bookingdetails;
