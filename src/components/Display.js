import React, { useContext } from "react";
import { CounterContext } from "../store/CounterProvider";

const Display = () => {
  const { state } = useContext(CounterContext);

  return <h1>{state.counter}</h1>;
};

export default Display;
