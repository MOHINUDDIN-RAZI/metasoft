import React, { useState } from "react";

export default function Rating({ label }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null); // Change hover's initial state to null

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null); // Set hover to null when mouse leaves
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center mt-12 text-xl md:text-2xl">
        <h1 className="font-bold text-center uppercase">{label}</h1>
      </div>
      <div className="container flex justify-center mt-4">
        <div id="star-container" className="star-container flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star text-6xl cursor-pointer transition-colors duration-200 ${
                index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
              }`}
              data-index={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <h2 id="count">Rating Count: {rating}</h2>
      </div>
    </div>
  );
}
