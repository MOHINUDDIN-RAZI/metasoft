import React from "react";

export default function Visit({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value); // Pass selected option to parent
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <h1 className="font-bold text-3xl uppercase">
          Hello, Thanks for visiting
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Please help us improve our cafe services by filling in our feedback
          form. Thank you!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center uppercase text-xl mt-6">
          How often do you visit here?
        </h1>
        <select
          onChange={handleChange}
          className="w-[31rem] h-[40px] mt-4 border border-gray-300 rounded-md"
        >
          <option value="Regularly">Regularly</option>
          <option value="Sometimes">Sometimes</option>
          <option value="Rarely">Rarely</option>
          <option value="Never">Never</option>
        </select>
      </div>
    </>
  );
}
