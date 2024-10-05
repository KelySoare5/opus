import styled from "styled-components";

export const ListCardVagas = styled.section`
    display: flex;
    align-items: center; 
    max-width: 1500px;
    /* height: 100%; */
    margin: 4rem auto;
    padding: 0 2rem;
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 2rem;

    /* O que vem depois dele/ nivel a baixo (article) */
    & > * {
        flex: 1 450px;
        max-width: 500px;
        /* justify-content: start; */

        /* //Estica no maximo mas que tenha no minimo 500px */
    }
    
    @media(max-width: 768px){
        margin: 0px;
        padding: 1rem;


  }
`

