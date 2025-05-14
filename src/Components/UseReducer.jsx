// import React, { useReducer, useState } from "react";

// const UseReducer = () => {
//   const [count, setCount] = useState(0);
//   const [state, dispatch] = useReducer(reducerFn, { count: 1 });

//   const reducerFn = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }
// };

//   const increment = () => {
//   dispatch ({ type: "increment" })
//   };

//   const decrement = () => {
//     setCount((curr) => curr - 1);
//   };

//   console.log(state);

//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <h1>{state.count}</h1>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// };

// export default UseReducer;

import React, { useReducer } from "react";

const STATE_INCREMENT = "increment";
const STATE_DECREMENT = "decrement";
const STATE_RESET = "reset";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case STATE_INCREMENT:
      return { count: state.count + 1 };

    case STATE_DECREMENT:
      return { count: state.count - 1 };

    case STATE_RESET:
      return { count: (state.count = 0) };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };
  console.log(state);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
        <button onClick={increment}>+</button>
        <h1>{state.count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={reset}> RESET</button>
      </div>
    </>
  );
};

export default UseReducer;
