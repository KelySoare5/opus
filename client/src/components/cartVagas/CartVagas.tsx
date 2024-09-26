import * as S from "./styled"
import empresa_X from "../../assets/img/empresa_X.png";
import { Vagas } from "../../data/datos";

interface cardVagasProps {
    vagas: Vagas;
}
export const CartVagas:React.FC<cardVagasProps> = ({vagas}) =>{

    return(
        <>
            <S.CartWrapper>

                <S.logoNomeEmpresa>
                    <S.logoEmpresa src={empresa_X} alt="Logomarca da empresa Xwitter"/>

                    <S.informacaoEmpresa>
                        <S.nomeEmpresa>{vagas.nome_cargo}</S.nomeEmpresa>
                        <S.dataPublicacao>{vagas.data_publicacao}</S.dataPublicacao>
                        <S.periodoTrabalhado>{vagas.periodo_trabalhado}</S.periodoTrabalhado>
                    </S.informacaoEmpresa>
                </S.logoNomeEmpresa>

                <S.tituloCargo>{vagas.nome_cargo}</S.tituloCargo>
                <S.requisitosCargo>{vagas.requisitos}</S.requisitosCargo>

                <S.btnCanditatar>Canditatar</S.btnCanditatar>
            </S.CartWrapper>
        </>
    )
}