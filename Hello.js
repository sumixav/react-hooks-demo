import React, { useReducer } from "react";

const initState = {
  count: 5, name:"Sumi", prevCount:null
};

const init = initialCount => {
  return { count: initialCount };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, prevCount: state.count };
    case "decrement":
      return { ...state, count: state.count - 1, prevCount: state.count };
    case "set":
      return {...state, ...init(action.payload)};
    case "undo":
    return {...state, count: state.prevCount}
    default:   
      throw new Error();
  }
};

const Hello = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <div>{state.count}</div>
      <input
        onChange={e => dispatch({ type: "set", payload: Number(e.target.value) })}
        placeholder="Set Count"
      />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "undo" })}>Undo</button>
    </div>
  );
};

export default Hello;
