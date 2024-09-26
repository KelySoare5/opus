import styled from "styled-components";

export const ListCardVagas = styled.section`
    display: flex;
    align-items: stretch; 
    max-width: 1240px;
    /* height: 100%; */
    margin: 4rem auto;
    /* padding: 0 2rem; */
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 2rem;

    /* O que vem depois dele/ nivel a baixo (article) */
    & > * {
        flex: 1 300px;
        /* //Estica no maximo mas que tenha no minimo 300px */
    }
    
`