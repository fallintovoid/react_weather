import { createContext, useState } from "react";

export const ThemeContext = createContext<IContext>({theme: 'light', setTheme: () => {}})

interface Props {
    children: any
}

export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<string>('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}