import UseContextHook from "./Hooks/UseContextHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseMemoHook from "./Hooks/UseMemoHook";
import UseRefHook from "./Hooks/UseRefHook";
import UseStateHook from "./Hooks/useStateHook";
import { ThemeProvider } from "./Hooks/Contexts/ThemeContext";
import UseReducerHook from "./Hooks/UseReducerHook/UseReducerHook";
import UseCallBackHook from "./Hooks/UseCallBackHook/UseCallBackHook";
import UseCustomHook from "./Hooks/Custom Hooks/UseCustomHook";
import ModalExample from "./Hooks/UseLayoutEffectHook/ModalExample";
import React from "react";
function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseRefHook /> */}

      {/* <ThemeProvider>
        <UseContextHook />
      </ThemeProvider> */}

      {/* <UseReducerHook /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseCustomHook /> */}
      <React.StrictMode>
        <ModalExample />
      </React.StrictMode>
    </>
  );
}

export default App;
