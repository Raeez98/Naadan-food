import { useState } from "react";
import FoodCard from "./Foodcard";
import EditScreen from "./EditScreen";
const totalfoodList = [{
  id:0,
  title: "Chicken 65",
  price: 160,
  status:true,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:1,
  title: "Chilli Chicken",
  price: 180,
  status:false,
  flavor:"Spicy",
  description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus. ",
  imageUrl:"https://media.gettyimages.com/photos/marinated-chicken-wings-picture-id171368988?k=20&m=171368988&s=612x612&w=0&h=mXxENFXe4wBdkRkTdP_HdyXH7PIbg5piRqOFW6F2a1w=",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:2,
  title: "Chicken Olathiyadh",
  price: 200,
  status:true,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1NEc8DMZvDPZK9dx3tkHgNoDGrhjgc9A5Q&usqp=CAU",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:3,
  title: "Chicken pottitherichadh",
  price: 220,
  status:false,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://dinetable.com/wp-content/uploads/2018/06/Chicken-Pottitherichathu-Recipe4-575x383.jpg",
  quantity:"12pc",
  deliveryTime:"30m",
},
]
const App = ()=> {
  const[foodList,setFoodList]=useState(totalfoodList);
  const[editScreenVisibility,setEditScreenVisibility]=useState(false);
  const[editFoodIndex,setEditFoodIndex]=useState(null);
  const sort=(order)=>{
    switch(order){
      case "High to low":
        setFoodList(prev=>{
          let newList = [...prev];
      return newList.sort((second,first)=>first.price-second.price)
    });
        break;
        case "Low to high":
          setFoodList(prev=>{
            let newList=[...prev];
            return newList.sort((second,first)=>second.price-first.price)
          });
        break;
        default:
          break;
         }
    }
  return (
    <>
    <div className="sort-section">
      
      <select
      // value={sortInput}
       onChange={(e)=>{
        // setSortInput(e.target.value);
         sort(e.target.value);
       }}
       >
         <option value="">Sort By Price (₹)</option>
        <option value="High to low">Hight to low</option>
        <option value="Low to high">Low to high</option>
      </select>
      
      </div>
    <div className="food-card-list">
    {
        foodList.map((food,i)=>{
      return(<FoodCard{...food} key={food.id}  deleteCard={()=>{
        setFoodList(foodList.filter((_val,index)=>i!==index))
      }}
      toggleStatus={()=>{
        setFoodList(prev=>{
         let newList=[...prev];
          let newFood={...newList[i]};
          newFood.status=!newFood.status;
          newList[i]=newFood;
          return newList;
          
        })
      }}
      editFood={()=>{
        setEditFoodIndex(i);
        setEditScreenVisibility(true)
      }}
      />)
    })
  }
      </div>
      {editScreenVisibility && <EditScreen setEditScreenVisibility={setEditScreenVisibility}
      editFoodIndex={editFoodIndex} 
      foodList={foodList}
      setFoodList={setFoodList}
      />}
      </>
    );
  }

export default App;
