import React, { useState } from "react";

export default function Rating({ label, onChange }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
    onChange(value); // Pass the rating value to parent
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center mt-10 text-xl md:text-2xl">
        <h1 className="font-bold text-center uppercase">{label}</h1>
      </div>
      <div className="container flex justify-center mt-2">
        <div id="star-container" className="star-container flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star text-6xl cursor-pointer transition-colors duration-200 ${
                index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() => handleRatingClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
