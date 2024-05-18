import React from "react";
import ContactForm from "./Components/ContactForm";
import Button from "./Components/Button";
import "./styles/App.css";

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(Button, {
      text: "Contato",
      onClick: () => handleButtonClick("Contato"),
    }),
    React.createElement(Button, {
      text: "Portfolio",
      onClick: () => handleButtonClick("Portfolio"),
    }),
    React.createElement(Button, {
      text: "Curriculo",
      onClick: () => handleButtonClick("Curriculo"),
    }),
    React.createElement(ContactForm, null)
  );
}

export default App;
