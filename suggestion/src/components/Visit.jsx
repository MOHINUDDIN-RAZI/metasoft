import React from "react";

export default function Visit() {
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

      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="font-bold text-xl uppercase">
          How often do you visit here?
        </h1>
      </div>

      <div className="flex justify-center items-center mt-4 ">
        <div className="relative w-full max-w-xs mx-4">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            // value={selectedOption}
            // onChange={handleChange}
          >
            <option value="Regularly">Regularly</option>
            <option value="First Time">First Time</option>
          </select>
        </div>
      </div>
    </>
  );
}
