import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import "./Components/Header.css";
import Curse from "./Components/Curse";
import "./Components/Curse.css";
import Watchkit from "./Components/Watchkit";
import "./Components/Watchkit.css";
import Swift from "./Components/Swift";
import "./Components/Swift.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Curse />
        <Watchkit />
        <Swift />
      </div>
    );
  }
}
export default App;
