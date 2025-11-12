import { useEffect, useState } from "react";
import "./UseCallBackHook.css";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items...");
  }, [getItems]);

  return (
    <div className="list-container">
      {items.map((item) => (
        <div key={item} className="list-item">
          {item}
        </div>
      ))}
    </div>
  );
}
