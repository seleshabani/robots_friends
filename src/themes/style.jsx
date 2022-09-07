import React, { useContext } from "react";
import { ThemeContext } from "../utils/context";
import {MainStyle} from "./mainStyle";

export const Style = ()=>{
    const {theme} = useContext(ThemeContext);
    return <MainStyle theme={theme}/>
}