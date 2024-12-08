import resList from "../utils/resList";

import RestaurantCard from "./RestaurantCard";
const Body=()=>{
  
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() =>
            {
              console.log("Button Clicked");
              }}>Top Rated Restaurants</button>
        </div>
       <div className="res-container">
        {resList.foods.map((restaurant) =>(
            <RestaurantCard key={restaurant.id} resData={restaurant}/>
          )) };
  
       {/* <RestaurantCard resData={resList.foods[0]} />
      <RestaurantCard resData={resList.foods[1]} /> */}
    
        
        
         {/* //resName="Meghana Foods"
        //   cuisine="Biruani,North Indian,Asian"
        //   imagee="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" */}
       
        {/* // <RestaurantCard
        // resName="KFC" 
        // cuisine="Burger,Fast-Food"
        // imagee="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         />    */}
       
       </div>
      </div>
    );
  };

  export default Body;