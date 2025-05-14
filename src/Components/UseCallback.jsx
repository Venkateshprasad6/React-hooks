// App.js
import React, { useState, useCallback } from "react";
import List from "./List";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor + 1,
        number + incrementor + 2,
        number + incrementor + 3,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "1rem",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;
