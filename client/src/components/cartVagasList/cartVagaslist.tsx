import React from "react";
import * as S from "./styled";
import { CartVagas } from "../cartVagas/CartVagas";
import { empresas } from "../../data/dados";

export const CartVagasList: React.FC = () => {
    return(
        <S.ListCardVagas>
            { empresas.map((vagas) => (

                <CartVagas key={vagas.id} vagas={vagas}/>
            ))}
        </S.ListCardVagas>
    )
}