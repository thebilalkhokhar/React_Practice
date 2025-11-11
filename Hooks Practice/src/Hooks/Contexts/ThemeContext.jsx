import { createContext, useContext, useState } from "react";
import { theme, buttonStyle, wrapperStyle } from "./ThemeContextStyles";
const ThemeContext = createContext();
const DarkContext = createContext();
const ButtonContext = createContext();
const WrapperContext = createContext();
export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useDarkContext() {
  return useContext(DarkContext);
}
export function useButtonContext() {
  return useContext(ButtonContext);
}
export function useWrapperContext() {
  return useContext(WrapperContext);
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState("isDarkMode");

  return (
    <ThemeContext.Provider value={theme(isDark)}>
      <DarkContext.Provider value={[setIsDark]}>
        <ButtonContext.Provider value={buttonStyle(isDark)}>
          <WrapperContext.Provider value={wrapperStyle()}>
            {children}
          </WrapperContext.Provider>
        </ButtonContext.Provider>
      </DarkContext.Provider>
    </ThemeContext.Provider>
  );
}
