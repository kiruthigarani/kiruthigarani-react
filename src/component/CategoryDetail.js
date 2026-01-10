import  React , {useState} from  "react";
import {CATEGORY_IMG_URL_300} from "../utils/constants";

import cartSlice from "../reduxStore/cartSlice";
// import { useDispatch } from "react-redux";

const CategoryDetail = ({ CategoryDetail }) => {
  console.log("CategoryDetail Rendered:", CategoryDetail);
  // const dispatch = useDispatch();

  // const addToCart = () => {
  //   dispatch(cartSlice.actions.addItem({ payload: CategoryDetail }));
  // };

  return (
    <div className="flex justify-between category-detail-item border-0 border-gray-300 shadow-sm rounded-lg w-6/12 mx-auto my-2 p-2  bg-white hover:bg-gray-100 cursor-pointer">
      <div className="text-left text-sm w-8/12 font-bold">
      <span
        className={`isvegetarian  border-1 ${
          CategoryDetail?.isVeg ? "border-green-500" : "border-red-500"
        }` }
      >
        {CategoryDetail?.isVeg ? "🟢" : "🔴"}
      </span>
      <p>{CategoryDetail?.name}</p>
      <p>Rs.{CategoryDetail?.price / 100}</p>
      <p> {
        CategoryDetail?.ratings?.aggregatedRating?.rating ? "⭐" : "☆"
      }
        {CategoryDetail?.ratings?.aggregatedRating?.rating } (
        {CategoryDetail?.ratings?.aggregatedRating?.ratingCountV2})
      </p>
      <p className="font-thin ">{CategoryDetail?.description}</p>
      </div>
      <div className="category-detail-image">
        <img
          className="w-24 h-24 rounded-lg"
          src={
            CategoryDetail?.imageId
              ? `${CATEGORY_IMG_URL_300}${CategoryDetail?.imageId}`
              : ""
          }
          alt={CategoryDetail?.name}
        />
        <button className="border-0 bg-gray-800 text-white px-2 py-1 rounded-lg mt-2 hover:bg-gray-600">Add +</button>
        </div>
    </div>
  );
};
export default CategoryDetail;
