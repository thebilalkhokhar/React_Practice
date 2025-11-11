import React from "react";
import {
  useButtonContext,
  useDarkContext,
  useThemeContext,
  useWrapperContext,
} from "./Contexts/ThemeContext";

const UseContextHook = () => {
  const theme = useThemeContext();
  const [setIsDark] = useDarkContext();
  const buttonStyle = useButtonContext();
  const wrapperStyle = useWrapperContext();

  return (
    <>
      <div style={wrapperStyle}>
        <div style={theme}>UseContextHook</div>
        <button
          style={buttonStyle}
          onClick={() => setIsDark((prevIsDark) => !prevIsDark)}
        >
          Change theme
        </button>
      </div>
    </>
  );
};

export default UseContextHook;
