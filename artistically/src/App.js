import "./App.css";
import React from "react";
import BackgroundSlider from "./bgm";

const App = () => {
  return (
    <>
      <div className="App">
        <BackgroundSlider />
        <img id="LOGO" src="LOGO.jpg" />
        <h1 className="welcome">Welcome to ArtisticAlly!</h1>
        <button className="button">Start exploring➡️</button>

        {/* Add other components or content here */}
      </div>
    </>
  );
};

export default App;


export default App;
