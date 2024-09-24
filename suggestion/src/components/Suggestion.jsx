import React, { useState } from "react";

function Suggestion({ onChange, onCheckboxChange }) {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value); // Pass suggestion value to parent
  };

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckboxChange(newValue); // Pass checkbox state to parent
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor="suggestionInput"
        className="font-bold text-center uppercase text-xl mt-6"
      >
        Your suggestions to improve
      </label>
      <textarea
        id="suggestionInput"
        value={inputValue}
        onChange={handleInputChange}
        className="w-[31rem] h-[186px] mt-2 p-2 border border-gray-300 rounded-md text-left resize-none"
      />
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="followUpCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-6 w-6 mr-2"
        />
        <label
          htmlFor="followUpCheckbox"
          className="flex items-center text-lg h-6 font-bold uppercase"
        >
          Receive personal follow up to your feedback
        </label>
      </div>
    </div>
  );
}

export default Suggestion;
