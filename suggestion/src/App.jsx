import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo.jsx";
import Rating from "./components/Rating.jsx";
import Visit from "./components/Visit.jsx";
import Recommendation from "./components/Recommedation.jsx";
import Suggestion from "./components/Suggestion.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import Dashboard from "./components/Dashboard.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function FeedbackForm() {
  const navigate = useNavigate();
  const [feedbackData, setFeedbackData] = useState({
    visitFrequency: "Regularly",
    rating: 0,
    recommendation: "",
    suggestion: "",
    followUp: false,
  });

  const handleVisitChange = (value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      visitFrequency: value,
    }));
  };

  const handleRatingChange = (value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      rating: value,
    }));
  };

  const handleRecommendationChange = (value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      recommendation: value,
    }));
  };

  const handleSuggestionChange = (value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      suggestion: value,
    }));
  };

  const handleCheckboxChange = (value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      followUp: value,
    }));
  };

  const handleSubmit = () => {
    navigate("/dashboard", { state: { feedbackData } });
  };

  return (
    <div>
      <Logo />
      <Visit onChange={handleVisitChange} />
      <Rating label="Quality of the food" onChange={handleRatingChange} />
      <Rating label="Service Quality" onChange={handleRatingChange} />
      <Rating label="Overall Experience" onChange={handleRatingChange} />
      <Recommendation onChange={handleRecommendationChange} />
      <Suggestion
        onChange={handleSuggestionChange}
        onCheckboxChange={handleCheckboxChange}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
