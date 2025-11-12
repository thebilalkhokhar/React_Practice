import { useState } from "react";
import List from "../UseDeferredValueHook/List";
import "./UseDeferredValueHook.css";

export default function UseDeferredValueHook() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="deferred-container">
      <div className="deferred-box">
        <h2 className="deferred-title">useDeferredValue Hook Practice</h2>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type something..."
          className="deferred-input"
        />

        <List input={input} />
      </div>
    </div>
  );
}
