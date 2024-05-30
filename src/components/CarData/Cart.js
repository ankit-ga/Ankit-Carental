import React from "react";



export default function Cart({cart}) {
    return (
        <div>
        {   
            cart.map((cartItem)=>{
            return(
              <div>
               
              <div>{cartItem.segment}</div>
              <div>{cartItem.brand}</div>
              <div>{cartItem.model}</div>
          
          </div>
            )
          })
              
           }
           </div>
    );
}
