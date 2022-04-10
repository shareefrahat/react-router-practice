import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Mealdetail = () => {
  const params = useParams();
  const idMeal = params.mealId;
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [idMeal]);

  return (
    <div>
      <div className="bg-green-700 py-5 text-white">
        <h1 className="text-2xl font-bold">Meal Details</h1>
      </div>
      <div>
        {!meal ? (
          <p>Details is loading...</p>
        ) : (
          meal.map((detail) => (
            <div key={detail.idMeal}>
              <div className="shadow-xl my-10 mx-auto w-1/4 border border-green-800 rounded">
                <img
                  className="rounded-t w-full mx-auto"
                  src={detail.strMealThumb}
                  alt=""
                />
                <div className="my-4">
                  <h4 className="text-2xl font-bold text-green-800">
                    {detail.strMeal}
                  </h4>
                  <p className="text-md text-slate-500">
                    Category: {detail.strCategory}
                  </p>
                  <p className="text-md text-slate-500">
                    Area: {detail.strArea}
                  </p>
                  <p className="m-5 text-justify">
                    <span className="text-green-800 font-bold">
                      Instruction:
                    </span>{" "}
                    {detail.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mealdetail;
