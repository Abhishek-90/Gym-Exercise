import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GymExerciseApp from "./GymExerciseApp";

ReactDOM.render(
  <BrowserRouter>
    <GymExerciseApp />
  </BrowserRouter>,
  document.getElementById("root")
);
