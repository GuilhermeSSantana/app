import styled from "styled-components";


export const Conteiner = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    gap: 25px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #000;
    @media(max-width: 800px) {
        width: 100%;
    }
`;


export const Titulo = styled.h1`
    font-size: 25px;
    color: #000;
    text-align: center;
    font-weight: 700;
`;