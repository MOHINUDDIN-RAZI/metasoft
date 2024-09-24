import React from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const { feedbackData } = location.state || { feedbackData: {} };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1 className="text-3xl font-bold  bg-green-100 pl-12 pr-12">
        Feedback Dashboard
      </h1>
      <div className="mt-4 md:text-2xl">
        <h2>Visit Frequency: {feedbackData.visitFrequency}</h2>
        <h2>Rating: {feedbackData.rating}</h2>
        <h2>Recommendation: {feedbackData.recommendation}</h2>
        <h2>Suggestion: {feedbackData.suggestion}</h2>
        <h2>Follow Up: {feedbackData.followUp ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
}
