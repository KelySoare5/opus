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


`
export const DivText = Styled.div`

    width: 600px;
    line-height: 1.5;
    text-align:justify;

`
export const P = Styled.p`
    color: ${theme.colors.colorOne};
    font-size: 25px;
`

export const H1 = Styled.h1`

    color: ${theme.colors.colorOne};
    font-weight:bold;


`