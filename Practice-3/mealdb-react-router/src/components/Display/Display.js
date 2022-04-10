import React from "react";

const Display = ({ category }) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = category;
  return (
    <div>
      <div className="shadow-xl border border-green-800 rounded">
        <img className="rounded-t h-60 w-full" src={strCategoryThumb} alt="" />
        <div className="my-4">
          <h4 className="text-2xl font-bold text-green-800">{strCategory}</h4>
          <p className="text-md text-slate-500">
            {strCategoryDescription.slice(0, 10)}
          </p>
        </div>
        <button className="bg-yellow-500 text-green-900 font-bold text-2xl px-4 py-2 my-4 rounded">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Display;
