import React from 'react'
import "./style.css";

const Grid = () => {
    return (
        <div className="grid-container">
           
            {[...Array(64)].map((_val,i)=>
            {
                
                 return(
                <div style={{
                    backgroundColor:i % 16 < 8 ? i%2 ? "black":"white": i%2 ? "white" :"black",
                   Color:i % 16 < 8 ? i%2 ?"white" :"black" : i%2 ? "black" :"white",
                }}>

                </div>
            )}
    )}
     </div>
    )}

export default Grid
