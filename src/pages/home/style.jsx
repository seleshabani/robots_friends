import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 20px;
`;

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
`;

export const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: none;
  outline: none;
  padding: 5px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  cursor: pointer;
`;
