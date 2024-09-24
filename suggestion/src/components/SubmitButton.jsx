import React from "react";

const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <button className="bg-red-600 text-white font-bold py-3 px-24 mb-4 rounded-lg text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        Submit Feedback
      </button>
    </div>
  );
};

export default SubmitButton;
