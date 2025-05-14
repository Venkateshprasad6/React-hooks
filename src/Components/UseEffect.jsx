import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);
  useEffect(() => {
    setNum1(200);
    console.log("Data fetched");
    

    return()=>{
        setNum1(100)
        console.log("Memory cleaned");
        

    }
  }, [num1]);
console.log(num1);



  return (
    <>
      <h1>{num1}</h1>
      <button onClick={() => (setNum1) => (current) => current + 1}>Add</button>
      <h1>{num2}</h1>
      <button onClick={() => (setNum2) => (current) => current + 1}>Add</button>
    </>
  );
};

export default UseEffect;
