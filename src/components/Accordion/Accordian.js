import React from "react";
import  {questions} from './QuestionApi';
import "./Accordian.css";
import Myaccordian from "./Myaccordion";
import { useState } from "react";

const Accordion=()=>{
    const [data,setData]=useState(questions);
 
    return(
        <>
        <section className="accord">
            <h1 className="faqhead">FAQS</h1>
        {
            data.map((curElem)=>{
                const {id}=curElem;
                return <Myaccordian key={id} {...curElem}/>
            })
        }
        </section>
        </>
    )
}
export default Accordion;