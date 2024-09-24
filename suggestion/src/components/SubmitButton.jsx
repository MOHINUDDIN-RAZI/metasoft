import React from "react";

export default function SubmitButton({ onClick }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="bg-red-600 text-white font-bold py-3 px-36 mb-4 rounded-lg text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  );
}
