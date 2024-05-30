import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { AuthContextProvider } from './context/Authcontext';
import Home from './pages/Home';
import About from './pages/About';
import Bookacar from './pages/Bookacar';
import Bookingdetails from './pages/Bookingdetails';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './pages/Header';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Docupload from "./pages/Docupload";
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from "./pages/PageNotFound";
import Confirmbooking from "./pages/Confirmbooking";
const Routerpage = () => {

  return (
  <>
  <BrowserRouter>
  <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/bookacar" element={<Bookacar/>}/>
          <Route exact path="/bookingdetails" element={<ProtectedRoute><Bookingdetails/></ProtectedRoute>}/>
          <Route exact path="/contact" element={<Contact/>} />
           <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} /> 
        </Route>
        <Route exact path="/terms" element={<Terms/>}></Route>
        <Route exact path="/faq" element={<Faq/>}></Route>
        <Route exact path="/docupload" element={<ProtectedRoute><Docupload/></ProtectedRoute>}></Route>
        <Route exact path="/confirmbooking" element={<ProtectedRoute><Confirmbooking/></ProtectedRoute>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>

    </Routes>
    </AuthContextProvider>
    </BrowserRouter>
    </>
  );
};
export default Routerpage;
