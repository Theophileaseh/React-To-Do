import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./classBased/components/TodoContainer";
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./App.css"
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)