import Styled from "styled-components";
import {theme} from "../../styles/theme";

export const DivMain = Styled.div`
    margin-top: 30px;
    width: 100vw;
    height: 100vh;
    background:${theme.colors.colorFour} ;
    text-align:center;
    padding: 25px;
`

export const DivAbout = Styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    

    @media(max-width: 768px){
        display: inline; 
    }


`
export const ImgAbout = Styled.img`
    width: 300px;
    height: 200px;

    @media(max-width: 768px){
        width: 250px;
        height: 150px;
    }

`
export const DivText = Styled.div`

    width: 600px;
    line-height: 1.5;
    text-align:justify;

    @media(max-width: 768px){
        width: 350px;

    }

`
export const P = Styled.p`
    color: ${theme.colors.colorOne};
    font-size: 25px;

    @media(max-width: 768px){
        font-size: 20px;
    }

`

export const H1 = Styled.h1`

    color: ${theme.colors.colorOne};
    font-weight:bold;


`