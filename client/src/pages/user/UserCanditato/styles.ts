import Styled from 'styled-components';
import { theme } from "../../../styles/theme";

export const DivMain = Styled.div`
    background:${theme.colors.colorFour};


`;

export const DivPosition = Styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

`
export const DivProfile = Styled.div`
    display:flex;
    flex-direction:column;



`
export const DivLogo = Styled.div`
    background:${theme.colors.colorOne};
    width:850px;
    text-align:center;
    padding:40px;
`

export const DivInformation = Styled.div`
    background:${theme.colors.colorFour};
    
`
export const DivPhoto = Styled.div`
  position: relative;
  top: -70px; 
  display: inline-block;
  margin-bottom: 30px;
  
`
export const Divelements = Styled.div`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`
export const DivButtom = Styled.button`
    width:120px;
    height:50px;
    background:${theme.colors.colorOne};
    position: relative;
    top: -100px; 
    color:${theme.colors.colorFour};
    border:2px solid ${theme.colors.colorFour};
    border-radius:10px;
    font-weight:bold;
    font-size:15px;
`


export const DivDescrition = Styled.div`

    display:flex;
    flex-direction:column;
    position:relative;
    top:-100px;

   
`
export const DivBox = Styled.div`

    padding:20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background:#D9D9D9;

     &:nth-child(1) {
        background-color:${theme.colors.colorFour};
    }
    width:850px;
    border-radius:20px;


`
export const DivBox2 = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    

`

export const DivNameNumber = Styled.div`

    display: flex;
    flex-direction:row;

`

export const H2 = Styled.h2`
    &:nth-child(1) {
       padding:5px;
    }
    padding:20px 0px 30px 0px;

`

export const P = Styled.p`
    margin:5px 0px 0px 10px;
    
`
export const P2 = Styled.p`
    text-align:justify;
    margin-top:20px;
    margin-left:15px;
`
export const P3 = Styled.p`
    font-weight:bold;
`
