import "./toggle-theme.css"
import { useState } from "react"

export default function ToggleTheme(){
    const [theme, setTheme]= useState("Light");

    const classes=`app ${theme==="Dark"? "light-theme" : "dark-theme"}`


    return <>
    <div className={classes} >
        <p>{(theme==="Dark"? "Light" : "Dark")} </p>
        <button onClick={()=>{(theme==="Light"? setTheme("Dark") : setTheme("Light"))}} >Change Theme</button>
    </div>
    </>
}