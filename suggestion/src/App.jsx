import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import logoText from "./assets/logotext.png";
import banner from "./assets/banner.png";
import Logo from "./components/Logo.jsx";
import Rating from "./components/Rating";
import Visit from "./components/Visit";
import Recommedation from "./components/Recommedation.jsx";
import Suggestion from "./components/Suggestion.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Logo />
      <Visit />
      <Rating label="Quality of the food" />
      <Rating label="Service Quality" />
      <Rating label="Overall Experience" />
      <Recommedation />
      <Suggestion />
      <SubmitButton />
    </>
  );
}

export default App;
