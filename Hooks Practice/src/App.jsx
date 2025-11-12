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
import UseTransitionHook from "./Hooks/UseTransitionHook/UseTransitionHook";
import UseDeferredValueHook from "./Hooks/UseDeferredValueHook/UseDefferedValue";
import UseImperativeHandleHook from "./Hooks/UseImperativeHandle Hook/UseImperativeHandleHook";
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
      {/* <ModalExample /> */}
      {/* <UseTransitionHook /> */}
      {/* <UseDeferredValueHook /> */}
      <UseImperativeHandleHook />
    </>
  );
}

export default App;
