import React from 'react'
import { useState } from 'react';

const EditScreen = ({setEditScreenVisibility,editFoodIndex,foodList}) => {
    const[editFoodForm,setEditFoodForm]=useState(foodList[editFoodIndex]);
    const{title,price,description}=editFoodForm;
    return (
        <div className="over-view-screen">
            <div className="edit-food-card-container">
                <div className="food-card-close-button"
                onClick={()=>{
                    setEditScreenVisibility(false)
                }}
                />
            <h2>Edit</h2>
            <form>
            <div className="input-fields">
                <label>Name:</label>
                <input type="text" value={title}
                onChange={
                    (e)=>{
                        setEditFoodForm(prev=>{
                            return{
                                ...prev,title:e.target.value
                            }
                        })
                    }
                }
                 />

            </div>
            <div className="input-fields">
                <label>Price(₹)</label>
                <input type="number" value={price}
                 onChange={
                    (e)=>{
                        setEditFoodForm(prev=>{
                            return{
                                ...prev,price:e.target.value
                            }
                        })
                    }
                }
                 
                />
            </div>
            <div className="input-fields">
                <label>Description:</label>
                 <textarea value={description}
                  onChange={
                    (e)=>{
                        setEditFoodForm(prev=>{
                            return{
                                ...prev,description:e.target.value
                            }
                        })
                    }
                }
                 />
                 
                </div>
                 <div className="submit-section">
                     <button type="submit">save</button>
                 </div>

            </form>
            
            </div> 
         
            
        </div>
    )
}

export default EditScreen
