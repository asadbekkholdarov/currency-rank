import React from "react";
import "./priceTracker/main.css";
import Logo from "./priceTracker/Logo";
import Coin from "./priceTracker/Coin";

function App() {
  return (
    <div className="App">
      <br />
      <b>
        <center>
          <h1>Crypto currency rank</h1>
        </center>
      </b>
      <Coin />
    </div>
  );
}

export default App;
