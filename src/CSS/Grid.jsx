import React from 'react'
import "./style.css";
import pawnImage from "../assets/icons/soldier.svg"
import blackPawn from "../assets/icons/soldierblack.svg"
import rookImage from "../assets/icons/chessrook.svg"
import rookwhite from "../assets/icons/rookwhite.svg"
import knightWhite from "../assets/icons/knightwhite.svg"
import knightBlack from "../assets/icons/knightblack.svg"
import bishopWhite from "../assets/icons/bishopwhite.svg"
import bishopBlack  from  "../assets/icons/bishopblack.svg"
import kingWhite from   "../assets/icons/kingwhite.svg"
import kingBlack from "../assets/icons/kingblack.svg"
import queenWhite from "../assets/icons/queenwhite.svg"
import queenBlack from "../assets/icons/queenblack.svg"
import { useState } from 'react';

const chessInitialState=[
    [
        {
            currentPiece:rookImage
        },
        {
            currentPiece:knightWhite
        },
        {
            currentPiece:bishopWhite
        },
        {
            currentPiece:kingWhite
        },
        {
            currentPiece:queenWhite
        },
        {
            currentPiece:bishopWhite
        },
        {
            currentPiece:knightWhite
        },
        {
            currentPiece:rookImage
        },
 ],
 [
     ...[...Array(8)].map(()=>{
         return{
             currentPiece:pawnImage
         }
     }
     )
 ],
 ...[...Array(4)].map(()=>{
     return[...Array(8)].map(()=>
     {
         return{
             currentPiece:null
         }
     })

    })
 ,[
     ...[...Array(8)].map(()=>
     {
         return{
             currentPiece: blackPawn
         }
     })
 ],
 [
    {
        currentPiece:rookwhite
       
    },
    {
        currentPiece: knightBlack
       
    },
    {
        currentPiece: bishopBlack
       
    },
    
     {
         currentPiece: kingBlack
        
     },
     {
        currentPiece:queenBlack
    },
    {
        currentPiece:bishopBlack
    },
    {
        currentPiece:knightBlack
    },
    {
        currentPiece:rookwhite
    },
 ],
]



const Grid = () => {
    const[chessState,setChessState]=useState(chessInitialState);

    return (
        <div className="grid-container">
            {chessState
            .map((currentColumn,i)=>
            currentColumn.map(({currentPiece},j)=>{
                return(
                    <div style={
                        {
                            backgroundColor:(i+j) %2 ? "#9e561b":"#e6ccab",
                        }
                    } onClick={()=>{
                        if(i===4){
                            setChessState(
                                prev=>{
                                    let newState=[...prev];     //spreading the arry in prev for two arrys as pointer
                                    let newColumn=[...newState[i]]  //spreading in all array
                                    let InitialColumn=[...newState[6]]

                                    newColumn[j]={
                                        currentPiece:blackPawn
                                    }
                                    InitialColumn[j]={
                                        currentPiece:null
                                    }
                                    newState[i]=newColumn
                                    newState[6]=InitialColumn
                                    return newState;
                                }

                            )
                        }
                    }
                    }
                    >
                        {
                            currentPiece && 
                            <img src={currentPiece} className="chess-piece"/>

                        }
                        </div>

                )
            }
            )
            )}
            </div>
            )
        }
           
            
export default Grid
