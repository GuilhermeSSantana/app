import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  max-width: 700px;
  padding: 30px;
  gap: 30px;
`;

export const LoginImg = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
