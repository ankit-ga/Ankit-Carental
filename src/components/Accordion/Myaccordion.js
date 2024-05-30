import React, { useState } from "react";

const Myaccordian=({question,answer})=>{
    const [show,setShow]=useState(false);
    return(
        <>
        <div className="ques">
            <h3 className="symbol" onClick={()=>setShow(!show)}>{show?"➖":"➕"}</h3>
            <h3>{question}</h3>
        </div>
        {show && <p className="answer">{answer}</p>}
        </>
    )
}

export default Myaccordian;