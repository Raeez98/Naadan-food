import React from 'react'
import "./style.css";
import pawnImage from "../assets/icons/soldier.svg"

const Grid = () => {
    return (
        <div className="grid-container">
           
            {[...Array(64)].map((_val,i)=>
            {let indexArray=[i%8 ,Math.floor(i/8)];
                console.log(indexArray);
            
                
                 return(
                <div style={{
                    backgroundColor:(indexArray[1]+indexArray[0]) %2 ? "#444":"#ddd",
                   color:(indexArray[1]+indexArray[0]) %2 ?"#ddd" :"#444",
                }}>
                    {/* {indexArray[1]+","+indexArray[0]} */}
                    {indexArray[1]===1 && <img className="chess-piece" src={pawnImage} alt="" />}

                </div>
            )}
    )}
     </div>
    )}

export default Grid
