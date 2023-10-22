import styled from 'styled-components';


export const Button = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #50C863;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    margin: 30px 0;    
    border: none;
    -webkit-box-shadow:0px 0px 30px 0px rgba(80,200,100,0.68);
    -moz-box-shadow: 0px 0px 30px 0px rgba(80,200,100,0.68);
    box-shadow: 0px 0px 30px 0px rgba(80,200,100,0.68);
    padding: 15px;
    font-weight: bold;
  font-family: 'inter', sans-serif;
    cursor: pointer;
    svg {

        font-size: 30px;
        margin-left: 10px;
    }
    &:hover {
        background-color: #29d657;
    }
   
`;