import styled from "styled-components";

export const ListCardVagas = styled.section`
    display: flex;
    align-items: stretch; 
    max-width: 1500px;
    /* height: 100%; */
    margin: 4rem;
    /* padding: 0 2rem; */
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 2rem;

    /* O que vem depois dele/ nivel a baixo (article) */
    & > * {
        flex: 1 400px;
        max-width: 600px;
        /* justify-content: start; */

        /* //Estica no maximo mas que tenha no minimo 500px */
    }
    
`

