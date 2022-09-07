import React, { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { FooterContainer,NightModeButton } from "./styled";

const Footer = ()=>{
    const {themeToggler} = useContext(ThemeContext);
    return (
        <FooterContainer>
            <NightModeButton onClick={()=>themeToggler()}>Changer de mode</NightModeButton>
        </FooterContainer>
    )
}
export default Footer;