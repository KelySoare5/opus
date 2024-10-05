import * as S from "../filtrosVagas/styled"
export const FiltrarVagas:React.FC = () =>{
    return(
        <>
            <S.wrapper>

                <S.opcoesWrapper> 
                    <S.opces>Recente</S.opces>
                    <S.opces>Uma semana</S.opces>
                    <S.opces>Um mês</S.opces>

                </S.opcoesWrapper>

                <S.opcoesWrapper>
                    <S.opces>Todas</S.opces>
                    <S.opces>CLT</S.opces>
                    <S.opces>PJ</S.opces>

                </S.opcoesWrapper>

            </S.wrapper>
        </>
    )
}