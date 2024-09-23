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

                <S.tituloCargo>Lacrador senior</S.tituloCargo>
                <S.requisitosCargo>habitar com a mãe, QI abaixo de 10, usuario de Discord, jogador de League of Legen...</S.requisitosCargo>

                <S.btnCanditatar>Canditatar</S.btnCanditatar>
            </S.CartWrapper>
        </>
    )
}