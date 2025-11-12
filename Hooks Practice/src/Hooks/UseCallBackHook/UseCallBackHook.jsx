import { useState, useCallback } from "react";
import List from "./List";
import "./UseCallBackHook.css";

const UseCallBackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useCallback added for better performance
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#1e1e1e" : "#f5f5f5",
    color: dark ? "#f5f5f5" : "#1e1e1e",
  };

  console.log("Parent rendered");

  return (
    <div className="callback-container" style={theme}>
      <div className="callback-card">
        <h2 className="title">useCallback Practice</h2>

        <input
          className="number-input"
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        <button
          className="toggle-btn"
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          Toggle Theme
        </button>

        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default UseCallBackHook;
