import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./ModalExample.css";

export default function ModalExample() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    for (let i = 0; i < 10000; i++) {}
    popup.current.style.top = `${bottom + 50}px`;
  }, [show]);

  return (
    <div className="modal-container">
      <button
        ref={button}
        className="modal-btn"
        onClick={() => setShow((prev) => !prev)}
      >
        Click Here
      </button>
      {show && (
        <div className="modal-popup" ref={popup}>
          <p className="modal-text">Hello World 👋</p>
        </div>
      )}
    </div>
  );
}
