import { Children } from "react";
import { createContext ,useContext,useEffect,useState} from "react";
const ThemeContext=createContext();
export const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({Children})=>{
    const [theme , setTheme]=useState(
        ()=>localStorage.getItem('theme'||'light')
    );
}

useEffect(()=>{
    localStorage.setItem('datatheme',theme);
},[theme]);