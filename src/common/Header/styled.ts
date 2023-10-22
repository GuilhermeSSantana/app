import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background-color: #0F1923;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Logo = styled.div`
    width: 100px;
    height: 100px;
    margin: 20px 25px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    margin-right: 20px;
    gap: 40px;
`

export const ButtonMenu = styled.button`
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: 18px;
    font-family: 'inter', sans-serif;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        color: #0000ff;
    }
`

export const MenuSair = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-left: auto;
`