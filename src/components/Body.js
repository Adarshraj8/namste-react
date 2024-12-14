
import { useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
 
const Body=()=>{
  //Local State variable - super powerful variable
  //this is known as array destructuring 
   const [listOfRestaurants,setlistOfRestaurants]=useState([]);
  //  const [displayedList, setDisplayedList] = useState([]);
   const [filterdRestraunt,setfilteredRestraunt]=useState([]);
   const [searchText,setSearchText]=useState("");
   console.log("body renader");
  // const arr=useState(resList.foods);
  // const [listOfRestaurants,setlistOfRestaurants]=arr;
    // normal js variable
    // let listOfRestaurants=null;
     useEffect(()=>{
      fetchData();
     },[]);

     const fetchData= async ()=>{
      try {
        const data = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
   
        // Log the response to ensure you are getting the data you expect
        console.log(json);
        //optona chaininig is used to acces the properties of object and array without throwing error
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
         setlistOfRestaurants(restaurants);
         setfilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
     }
     //condtional rendering :-rendering on basis of condition
    //  if(listOfRestaurants.length==0){
    //   return <Shimmer/>;
    //  }

    return listOfRestaurants.length==0?(
    <Shimmer/>
     ):(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text"  className="search-box"
             value={searchText}
             onChange={(e)=>{
              setSearchText(e.target.value);
             }}
             />
            <button id="button"
            onClick={()=>{
              //filter the restaurant card and update ui
                 console.log(searchText);
                const filterdRestraunt =listOfRestaurants.filter(
                  (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                 setfilteredRestraunt(filterdRestraunt);
               } }>Search</button>
          </div>
          <button className="filter-btn" 
          onClick={() => {

         const filteredList=listOfRestaurants.filter(
              (res)=>res.info.avgRating>4.4
            );
          setfilteredRestraunt(filteredList);
              }}>
            Top Rated Restraunts
            </button>
        </div>
         

       <div className="res-container">
        {filterdRestraunt.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
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