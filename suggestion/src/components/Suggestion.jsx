import React, { useState } from "react";

function Suggestion() {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor="nameInput"
        className="font-bold text-center uppercase text-xl mt-6"
      >
        Your suggestions to improve
      </label>
      <input
        type="text"
        id="nameInput"
        value={inputValue}
        onChange={handleInputChange}
        className="w-[31rem] h-[186px] mt-2 p-2 border border-gray-300 rounded-md"
      />
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="followUpCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-6 w-6 mr-2" // Make the checkbox larger
        />
        <label
          htmlFor="followUpCheckbox"
          className="flex items-center text-lg h-6 font-bold"
        >
          Receive personal follow-up to your feedback
        </label>
      </div>
    </div>
  );
}

export default Suggestion;
