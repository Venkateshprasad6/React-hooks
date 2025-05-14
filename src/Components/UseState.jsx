import React, { useState } from "react";

const UseState = () => {
  const [num, setNum] = useState(1);

  const handleAdd = () => {
    return setNum(curr => curr + 1);
  };
  console.log(num);
  

  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default UseState;
