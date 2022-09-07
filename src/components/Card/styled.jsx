import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20%;
  background-color: aquamarine;
  height: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 150px;
  }
  & h1 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }
  & p {
    font-size: 0.9rem;
    text-align: center;
  }
  &:hover {
    background-color: rgb(238, 156, 25);
  }
  & a {
    text-decoration: none;
    color: black;
  }
`;
