import React, { useState, useEffect,lazy, Suspense } from "react";
import { Link } from "react-router";
// import "../css/index.css";
import ShimmerComponent from "./ShimmerComponent";
import RestuarantComponent,{discountRestuarant} from "./RestuarantComponent";


import { ITEM_LIST_API } from "../utils/constants";
import useOnlineStatus  from "../utils/useOnlineStatus";


const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const isOnline = useOnlineStatus(); 
  const DiscountRestuarantComponent = discountRestuarant(RestuarantComponent);
  
  console.log("Body rendered");

  useEffect(() => {
    getResponse();

    // const interval = setInterval(() => {
    //    console.log("useEffect called");
      
    // }, 1000);
    
    // return () => {
    //   //this will allow to cleanup the interval, and running the logic on every component
    //   console.log("useEffect cleanup");
    //   clearInterval(interval);
    // };
  }, []);

  const getResponse = async () => {
    console.log("useEffect called");
    const data = await fetch(
      ITEM_LIST_API
    );
    const json = await data.json();
    const processsedData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log("RESTAURANT DATA:", processsedData);
    setRestaurants(processsedData);
    setFilterRestaurants(processsedData);
  };

   return !isOnline ? <h1>You are offline. Please check your internet connection.</h1> :
   (
    <div className="w-full">
    
      <div className="m-4 btn-container">
        <input className="border-0 shadow-md px-2 py-1 m-4"
          type="text"
          name= "search"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search border-0 bg-orange-400 rounded-md px-2 py-1 cursor-pointer"
          onClick={() => {
            const searchResult = restaurants.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            console.log("searchResult:", searchText.length);
           
              setFilterRestaurants(searchResult);
           
          }}
        >
          Search
        </button>
        <button
          className="cursor-pointer filter rounded-md bg-orange-400 ml-1 px-2 py-1 border-0"
          onClick={() => {
            let resData1 = restaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4.1;
            });
            setFilterRestaurants(resData1);
          }}
        >
          TOP RATED RESTAURANTS
        </button>
      </div>
    
      {filterRestaurants.length == 0 ? (
        <ShimmerComponent />
      ) : (
        <div className="card-container bg-amber-400  flex flex-wrap gap-4 justify-center">
          {filterRestaurants.map((restaurant) => {
            {
              return (
                <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                 
                  {
                  (restaurant?.info?.aggregatedDiscountInfoV3?.discountTag != null) ? (
                   
                      <DiscountRestuarantComponent
                      resData={restaurant.info}
                    />
                   
                  ) : (
                  
                    <RestuarantComponent
                      resData={restaurant.info}
                    />
                  )}
                </Link>
                
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
