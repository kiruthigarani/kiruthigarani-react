import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../css/index.css";
import ShimmerComponent from "./ShimmerComponent";
import RestuarantComponent from "./RestuarantComponent";
import resData from "../response.json";


const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    getResponse();

    const interval = setInterval(() => {
       console.log("useEffect called");
      
    }, 1000);
    
    return () => {
      //this will allow to cleanup the interval, and running the logic on every component
      console.log("useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  const getResponse = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const processsedData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log("RESTAURANT DATA:", processsedData);
    setRestaurants(processsedData);
    setFilterRestaurants(processsedData);
  };

  return (
    <div className="body-container">
      <div className="btn-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
          className="filter-btn"
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
        <div className="card-container">
          {filterRestaurants.map((restaurant) => {
            {
              return (
                <Link to={`/restaurant/123`} key={restaurant.info.id}>
                  <RestuarantComponent
                    
                    resData={restaurant.info}
                  />
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
