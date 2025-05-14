import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState('');
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  console.log("Theme Changed");

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}

      />
      <br />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={{ ...themeStyles, display: "inline-block" }}>
        {doubleNumber}
      </div>
    </>
  );
};

export default UseMemo;


const slowFunction = (num) => {
  console.log("Running slow function...");
  for (let i = 0; i < 100000000; i++) {} 
  return num * 2;
};
