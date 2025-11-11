import UseContextHook from "./Hooks/UseContextHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseMemoHook from "./Hooks/UseMemoHook";
import UseRefHook from "./Hooks/UseRefHook";
import UseStateHook from "./Hooks/useStateHook";
import { ThemeProvider } from "./Hooks/Contexts/ThemeContext";
import UseReducerHook from "./Hooks/UseReducerHook/UseReducerHook";
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

      <UseReducerHook />
    </>
  );
}

export default App;
