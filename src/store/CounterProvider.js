import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();
export const CounterContextProvider = props => {
  const initialState = {
    counter: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_COUNTER": {
        return {
          ...state,
          counter: state.counter + action.payload.value
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // 模仿 redux-thunk
  const isPromise = obj => {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  };

  const middleware = dispatch => {
    return action => {
      if (isPromise(action.payload)) {
        action.payload.then(v => {
          dispatch({ type: action.type, payload: v });
        });
      } else {
        dispatch(action);
      }
    };
  };

  return (
    <CounterContext.Provider value={{ state, dispatch: middleware(dispatch) }}>
      {props.children}
    </CounterContext.Provider>
  );
};
