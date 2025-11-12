import React, { useImperativeHandle, useRef } from "react";
import "./style.css";

const ConfirmationModal = React.forwardRef(function ConfirmationModal(
  { isOpen, onClose },
  ref
) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => ({
    focusCloseBtn: () => closeRef.current?.focus(),
    focusConfirmBtn: () => confirmRef.current?.focus(),
    focusDenyBtn: () => denyRef.current?.focus(),
  }));

  if (!isOpen) return null;

  return (
    <div ref={ref}>
      <button ref={closeRef} onClick={onClose}>
        ✕
      </button>
      <h1>Title</h1>
      <p>Do you confirm?</p>
      <div>
        <button ref={confirmRef} onClick={onClose}>
          Confirm
        </button>
        <button ref={denyRef} onClick={onClose}>
          Deny
        </button>
      </div>
    </div>
  );
});

export default ConfirmationModal;
