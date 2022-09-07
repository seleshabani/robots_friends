import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light');

    const themeToggler = ()=>{
        setTheme(theme==='light'?'dark':'light')
    }

    return(
        <ThemeContext.Provider value={{theme,themeToggler}}>
            {children}
        </ThemeContext.Provider>
    )
}