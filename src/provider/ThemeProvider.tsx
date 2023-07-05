import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables'
import { Storage } from "../model/Storage";

interface Props {
    children: ReactNode,
}


export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(Storage.getItem('theme') || Theme.LIGHT);
    ChangeCssRootVariables(theme);
    function changeTheme(theme:Theme) {
        Storage.setItem('theme', theme)
        setTheme(theme);
        ChangeCssRootVariables(theme);
    }
    return (<ThemeContext.Provider 
    value={{
        theme,
        changeTheme,}}
    {...props}
    >
        {children}
    </ThemeContext.Provider>
    )
}