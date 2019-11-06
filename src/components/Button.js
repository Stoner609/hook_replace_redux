import React, { useState, useContext } from "react";

import { CounterContext } from "../store/CounterProvider";

export const AsyncIncrement = () => {
  const { dispatch } = useContext(CounterContext);
  const [count, setCount] = useState(0);

  const asyncCounterInc = async () => {
    setCount(count => count + 1);
    return new Promise(reslove => {
      setTimeout(() => {
        reslove({ value: 1 });
      }, 1000);
    });
  };

  return (
    <button
      onClick={() =>
        dispatch({ type: "ADD_TO_COUNTER", payload: asyncCounterInc() })
      }
    >
      async Increment: {count}
    </button>
  );
};

export const Increment = () => {
  const { dispatch } = useContext(CounterContext);
  const [count, setCount] = useState(0);

  const CounterInc = () => {
    setCount(count => count + 1);
    dispatch({ type: "ADD_TO_COUNTER", payload: { value: 1 } });
    // setTimeout(() => {
    //   dispatch({type: 'ADD_TO_COUNTER', payload: {value: 1} });
    // }, 1000);
  };

  return <button onClick={CounterInc}>Increment: {count}</button>;
};

export const Decrement = () => {
  const { dispatch } = useContext(CounterContext);
  const [count, setCount] = useState(0);

  const countDec = () => {
    setCount(count => count + 1);
    dispatch({ type: "ADD_TO_COUNTER", payload: { value: -1 } });
  };

  return <button onClick={countDec}>Decrement: {count}</button>;
};

// rafc
