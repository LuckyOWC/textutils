import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Customnavbar from "./components/Customnavbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Alert auto-dismiss
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="App-header">
        <Customnavbar
          title="About Us Test"
          pricing="Contact Us"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </header>
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze below"
          showAlert={showAlert}
          darkMode={darkMode}
        />
      </div>
      <div className="footer">
        <p style={{ marginBottom: "0px", color: "#706b6b" }}>
          Made with ❤️ by Lucky{" "}
          <a href="https://github.com/LuckyOWC/textutils" target="_blank">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              style={{ width: "35px" }}
            ></img>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
