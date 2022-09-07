import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: rgb(1, 88, 72);
  margin-bottom: 10px;
  & a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: none;
  outline: none;
  padding: 5px;
`;
