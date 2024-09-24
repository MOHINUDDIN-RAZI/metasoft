import React, { useState } from "react";

export default function Recommendation({ onChange }) {
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setRecommendation(value);
    onChange(value); // Pass the recommendation value to parent
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div>
        <h1 className="font-bold text-center uppercase text-xl md:text-2xl">
          Would you recommend our restaurant to others?
        </h1>
        <div className="mt-4 flex justify-center text-xl text-gray-400 font-bold">
          <label className="mr-4">
            <input
              type="radio"
              name="recommend"
              value="yes"
              checked={recommendation === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="no"
              checked={recommendation === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
}
