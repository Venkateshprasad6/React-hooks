import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = input; 
  }, [input]);

  const display = () => {
    console.log("Current input value (ref):", inputRef.current);
  };

  return (
    <>
      <h1>Input</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <p>My name is (state): {input}</p>
      <p>My name is (ref): {inputRef.current}</p>
      <button onClick={display}>Show Input</button>
    </>
  );
};

export default UseRef;
