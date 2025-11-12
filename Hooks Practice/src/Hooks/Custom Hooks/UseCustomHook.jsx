import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";
import "./UseCustomHook.css";

export default function UseCustomHook() {
  const [value, setValue] = useLocalStorage("name", "");
  useUpdateLogger(value);

  return (
    <div className="customHook-container">
      <div className="customHook-box">
        <h2 className="customHook-title">Custom Hook Practice</h2>
        <input
          type="text"
          className="customHook-input"
          placeholder="Type your name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
