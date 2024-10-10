import styled from "styled-components";
import { theme } from "../../styles/theme";


export const CartWrapper = styled.section`
    background: #D9D9D9;
    border-radius: 10px;
    /* width: 100%; */
    padding: 10px;
    margin: 10px auto;
    flex-direction:column;
    display: flex;
    align-items: ; 
  
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.15); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra para dar um efeito de destaque */
    transition: transform 0.2s, box-shadow 0.2s; /* Suaviza a transição ao interagir */

    &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`
export const logoNomeEmpresa = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;

`
export const logoEmpresa = styled.img`
    width: 100px;

    @media(max-width: 768px){
        width: 50px;
  }
`
export const informacaoEmpresa = styled.div`
    font-weight: bold;
    text-align: right;
`

export const nomeEmpresa = styled.p`
    
`
export const dataPublicacao = styled.p`

`

export const periodoTrabalhado = styled.p`

`


export const tituloCargo = styled.p`
    font-weight: bold;
    padding: 0px 10px;
`
export const requisitosCargoWrapper = styled.div`
    padding: 5px 10px;
    margin: 10px 0;
    height: 100px;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
`
export const requisitosCargo = styled.p`
    font-size: 18px;
`
export const btnCanditatar = styled.button`
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    color: ${theme.colors.colorOne};
    font-weight: bold;
`