import * as S from "./styled"
import empresa_X from "../../../assets/img/empresa_X.png";

export const CartVagas:React.FC = () =>{

    return(
        <>
            <S.CartWrapper>

                <S.logoNomeEmpresa>
                    <S.logoEmpresa src={empresa_X} alt="Logomarca da empresa Xwitter"/>

                    <S.informacaoEmpresa>
                        <S.nomeEmpresa>Xwitter</S.nomeEmpresa>
                        <S.dataPublicacao>15/09/2024</S.dataPublicacao>
                        <S.periodoTrabalhado>Integral</S.periodoTrabalhado>
                    </S.informacaoEmpresa>
                </S.logoNomeEmpresa>


            </S.CartWrapper>
        </>
    )
}