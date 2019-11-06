import React from "react";

import "./App.css";
import { CounterContextProvider } from "./store/CounterProvider";

import Display from "./components/Display";
import { AsyncIncrement, Increment, Decrement } from "./components/Button";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Display />
        <AsyncIncrement />
        <Increment />
        <Decrement />
      </CounterContextProvider>
    </div>
  );
}

export default App;
