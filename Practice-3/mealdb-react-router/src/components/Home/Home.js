import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      <div className="bg-green-700 py-5 text-white">
        <h1 className="text-4xl font-bold mb-5">
          <span className="text-2xl ">Welcome to</span> <br />{" "}
          <span>Sulayman Dine</span>
        </h1>
      </div>

      <div className="m-10">
        {categories.length === 0 ? (
          <p className="mt-5 text-xl text-yellow-800">
            your meal is not loading
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {categories.map((category) => (
              <Display category={category} key={category.idCategory}></Display>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
