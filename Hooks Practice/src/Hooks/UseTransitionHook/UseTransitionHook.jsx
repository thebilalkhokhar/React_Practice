import { useState, useTransition } from "react";
import "./UseTransitionHook.css";

export default function UseTransitionHook() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(value);
      }
      setList(l);
    });
  }

  return (
    <div className="transition-container">
      <div className="transition-box">
        <h2 className="transition-title">useTransition Hook Practice</h2>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type something..."
          className="transition-input"
        />

        {isPending ? (
          <p className="transition-loading">Loading...</p>
        ) : (
          <ul className="transition-list">
            {list.map((item, index) => (
              <li key={index} className="transition-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
