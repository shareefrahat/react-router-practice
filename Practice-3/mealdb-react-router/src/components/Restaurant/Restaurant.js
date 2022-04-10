import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shop from "../Shop/Shop";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="bg-green-700 py-5 text-white">
        <h1 className="text-4xl font-bold mb-5">
          Restaurant <br />
          <span className="text-2xl">Search your favourite meal</span>
        </h1>
        <div>
          <input
            onChange={searchFood}
            className="text-green-800 py-2 px-4 rounded"
            type="text"
            placeholder="Search your favourite food here"
            name=""
            id=""
          />
          {/* <button className="bg-yellow-500 text-green-900 font-bold py-2 px-10 rounded mx-5">
          Find
        </button> */}
        </div>

        {/* Search Result */}

        {!searchText ? (
          ""
        ) : !meals ? (
          <p className="mt-5 text-xl">"{searchText}" is not available</p>
        ) : (
          <div className="bg-white h-40 w-60 mx-auto overflow-scroll text-green-800">
            {meals.map((meal) =>
              !searchText ? (
                ""
              ) : (
                <Link
                  to={"/meal/" + meal.idMeal}
                  key={meal.idMeal}
                  className="block px-10 hover:bg-green-800 hover:text-white"
                >
                  {meal.strMeal}
                </Link>
              )
            )}
          </div>
        )}

        {/* Data Pass to Shop Component */}
      </div>
      <div className="m-10">
        {!meals ? (
          <p className="mt-5 text-xl text-yellow-800">
            "Opps! your meal "{searchText}" is not available
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {meals.map((meal) => (
              <Shop meal={meal} key={meal.idMeal}></Shop>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
