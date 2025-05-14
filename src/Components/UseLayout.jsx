//Difference b/w useLayout hook & useEffect hook
import React, {useState,  useLayoutEffect } from "react";

const UseLayout = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("count", count);
  }, [count]);

  console.log('rendered');
  
  return (
    <>
      <h1>{count} Count</h1>
      <button onClick={() => setCount((curr) => curr + 1)}>Add </button>
    </>
  );
};

export default UseLayout;
