// import React from "react";

// export default function Recommedation() {
//   return (
//     <div className="flex items-center justify-center mt-12 text-xl">
//       <h1 className="font-bold text-center uppercase">
//         Would you recommend our restaurant to others?
//       </h1>

//     </div>
//   );
// }

import React, { useState } from "react";

export default function RadioButton() {
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    setRecommendation(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div>
        <h1 className="font-bold text-center uppercase text-xl md:text-2xl">
          Would you recommend our restaurant to others?{" "}
        </h1>
        <div className="mt-4 flex justify-center">
          <label className="mr-4">
            <input
              type="radio"
              name="recommend"
              value="yes"
              checked={recommendation === "yes"}
              onChange={handleChange}
              className="mr-2 text-gray-500"
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
        {/* <div className="flex justify-center mt-4">
          <h2>
            Your Answer: {recommendation ? recommendation : "No answer yet"}
          </h2>
        </div> */}
      </div>
    </div>
  );
}
