import React from "react";
import { Link } from "react-router-dom";
import { InputWrapper, StyledInput, Title } from "./styled";

const Header = (props) => {
  return (
    <InputWrapper>
      <Title>
        <Link to="/">Mes amis Robots</Link>
      </Title>
      {props.children}
    </InputWrapper>
  );
};
export default Header;
