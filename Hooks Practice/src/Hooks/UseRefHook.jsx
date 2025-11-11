import React, { useEffect, useRef, useState } from "react";
const UseRefHook = () => {
  const [name, setName] = useState("");
  const rememberName = useRef("");
  const inputRef = useRef();
  const renderCount = useRef(1);

  useEffect(() => {
    rememberName.current = name;
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <div>
        <h1>useRef Hook Example</h1>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{`My name is ${name} and it used to be ${rememberName.current}`}</p>
        <p>{`Render Count: ${renderCount.current}`}</p>
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    </>
  );
};
export default UseRefHook;

// const UseRefHook = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <>
//       <div>
//         <h1>useRef Hook Example</h1>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <p>{`My name is ${name}`}</p>
//         <p>{`Render Count: ${renderCount.current}`}</p>
//       </div>
//     </>
//   );
// };
// const UseRefHook = () => {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   });

//   return (
//     <>
//       <div>
//         <h1>useRef Hook Example</h1>
//         <input
//           ref={inputRef}
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <p>{`My name is ${name}`}</p>
//         <button onClick={() => inputRef.current.focus()}>Focus Input</button>
//       </div>
//     </>
//   );
// };
// const UseRefHook = () => {
//   const [name, setName] = useState("");
//   const rememberName = useRef();

//   useEffect(() => {
//     rememberName.current = name;
//   });

//   return (
//     <>
//       <div>
//         <h1>useRef Hook Example</h1>
//         <input
//           ref={rememberName}
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <p>{`My name is ${name} and it used to be ${rememberName.current}`}</p>
//       </div>
//     </>
//   );
// };
