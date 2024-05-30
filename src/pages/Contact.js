import { useState } from "react";
import "./Contact.css";
import Footer from "../components/Footer/Footer";
const Contact=()=> {
  const initialValues = { username:"", email:"", mobileno:"",
  feedback:"", };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };  
  const postData=async (e) => {
    e.preventDefault();
    const  {username, email, mobileno, feedback, }=formValues;
    if(username && email && mobileno && feedback){
   const res=await fetch("https://getyoursapp-default-rtdb.firebaseio.com/contactformdata.json",{
     method:"POST",
     headers:{
       "Content-Type":"application/json",
     },
     body:JSON.stringify(
      {username, email, mobileno, feedback, }
     )
   })
   if(res){
     setFormValues({
       username:"", email:"", mobileno:"",
      feedback:"", 
     });
     alert("Your feedback is submitted.Thank you");
   }
  }else{
    setFormErrors(validate(formValues));
    setIsSubmit(true) 
  }
}
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mregex=/^[6-9]\d{9}$/;
    if (!values.username) {
      errors.username = "*Name is required!";
    }
    if (!values.mobileno) {
      errors.mobileno = "*Mobile No. is required!";
    }else if (!mregex.test(values.mobileno)) {
      errors.mobileno = "*Please enter valid mobile number.";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }
    if (!values.feedback) {
      errors.feedback = "*Feedback is required!";
    }
    return errors;
  };
  return (
      <>
    <div className="wrapper_contact">
      <form className="form_data" method="POST">
        <div className="us">CONTACT US</div>
          <div className="username">
            <label className="input_label">Name</label><br/>
            <input
              className="input_area"
              type="text"
              name="username"
              placeholder="Username"           
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="form_para">{formErrors.username}</p>
          <div className="email">
            <label className="input_label">Email</label><br/>
            <input
            className="input_area"
              type="text"
              name="email"
              placeholder="Email"           
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="form_para">{formErrors.email}</p>
          <div className="mobile_no">
            <label className="input_label">Mobile No</label><br/>
            <input
            className="input_area"
              type="text"
              name="mobileno"
              placeholder="Mobile No"           
              value={formValues.mobileno}
              onChange={handleChange}
            />
          </div>
          <p className="form_para">{formErrors.mobileno}</p>
          <div className="feedback">
            <label className="input_label">Feedback or Query</label><br/>
            <textarea
            className="form_textarea"
              name="feedback"
              placeholder="Ask or Say Anything!!"           
              value={formValues.feedback}
              onChange={handleChange}
            />
          </div>
          <p className="form_para">{formErrors.feedback}</p>
          <button className="querybtn" onClick={postData}>Send</button><br/><br/>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="megs">Your Feedback is submitted !!!</div>
      ) : (
        <p></p>
      )}
      </form>
    </div>
    <Footer/>
    </>
  );
}
export default Contact;

