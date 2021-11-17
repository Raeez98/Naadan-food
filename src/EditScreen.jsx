import React from 'react'

const EditScreen = () => {
    return (
        <div className="over-view-screen">
            <div className="edit-food-card-container">
            <h2>Edit</h2>
            <form>
            <div className="input-fields">
                <label>Name:</label>
                <input type="text"/>

            </div>
            <div className="input-fields">
                <label>Price:</label>
                <input type="number"/>
            </div>
            <div className="input-fields">
                <label>Description:</label>
               
                <textarea/>
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
