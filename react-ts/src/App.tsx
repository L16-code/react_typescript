import { ReactNode, createContext, useState } from "react";
import Newbox from "./components/Newbox";

type themetype = "light" | "dark";
interface ThemeContextType {
  theme: themetype;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>({
  theme: "light",
  toggleTheme: () => { },
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<themetype>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
    {children}
  </ThemeContext.Provider>
}
function App() {
  return (
    <>
      <ThemeProvider>

        <div>Hello</div> 
        <Newbox />
      </ThemeProvider>
    </>
  )
}

export default App
