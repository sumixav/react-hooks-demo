import React, { useReducer } from "react";

const initState = {
  count: 5
};

const init = initialCount => {
  return { count: initialCount };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return init(action.payload);
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
      <button onClick={() => dispatch({ type: "increment" })}>Inc</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
    </div>
  );
};

export default Hello;
