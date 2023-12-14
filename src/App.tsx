import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataComponent } from "./components/FormComponent";
import { HeadComponent } from "./components/HeadComponent";

function App() {
  return (
    <div className="App">
      <HeadComponent></HeadComponent>
      <DataComponent></DataComponent>
    </div>
  );
}

export default App;
