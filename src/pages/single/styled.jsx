import styled from "styled-components";

export const SingleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
`;

export const ImageWrapper = styled.div`
  height: 300px;
  width: 80%;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: solid white 1px;
  & img {
    width: 100%;
    height: 100%;
  }
`;
