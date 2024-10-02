import * as S from "./styles";
import Navbar from "../../../components/Header/Navbar"
import empresaLogo from "../../../assets/img/Profile-picture.png";
import logoOpus from "../../../assets/img/Logotipo-Vetor(1).png";

interface Navbar{
    handleOpen: () => void;
  handPerfil:()=>void;
  acesso:boolean;

}


export const UserEmpresa = ({
    handleOpen,
    handPerfil,
    acesso,
}:Navbar)=>{

    return(

        <>
        <Navbar handleOpen={handleOpen} acesso={acesso} handPerfil={handPerfil} />
          <S.DivMain>
            <S.DivPosition>
              <S.DivPerfil>
                <S.DivLogo>
                  <img src={logoOpus} width={100} height={100}/>
                </S.DivLogo>
                
                <S.DivInformation>
                  <S.Divelements>
                    <S.DivPhoto>
                      <img src={empresaLogo} height={150} width={150}/>
                    </S.DivPhoto>

                    <S.DivButtom>
                      editar perfil
                    </S.DivButtom>

                  </S.Divelements>

                  <S.DivDescrition>
                    <S.DivBox>
                        
                        <S.DivBox2>
                        <S.DivNameNumber>
                          <S.H2>Rustic Art ,</S.H2>
                         
                        </S.DivNameNumber>
                       
                       <S.P2>Rua 12</S.P2>
                        </S.DivBox2>

                        <S.DivBox2>
                          <S.P>rustcart@gmail.com</S.P>
                          <S.P2>(86) 2204-2298</S.P2>
                        </S.DivBox2>

                    </S.DivBox>
                     
                     <S.H2>Sobre</S.H2>

                    <S.DivBox>
                        <S.P>
                        Loja de peças artesanais feitas das mais variados tipos de madeira da região do Piauí.
                        </S.P>
                    </S.DivBox>

                    <S.H2>
                      Vagas
                    </S.H2>

                  <S.DivVagas>
                    <S.DivVagasPosition>
                    <S.DivVagasInformacoes>
                      <img src={empresaLogo} height={50} width={50}/>
                        <S.DivBox2>
                          <S.P>Rustic Art</S.P>
                          <S.P>24/06/2021</S.P>
                          <S.P>Integral</S.P>
                        </S.DivBox2>
                    </S.DivVagasInformacoes>
                    <S.DivTitle>
                      <S.H2>
                      Analista de Redes Digitais e Designer Grafíco
                      </S.H2>
                    </S.DivTitle>
                    <S.DivInformations>
                    <S.P3>
                      Experiência com marketing digital, atendimento pelo direct dos clientes pela rede social Instagram, editor  de fotos e videos, desing de banner e logos para feiras ou eventos.
                      </S.P3>
                    </S.DivInformations>
                    <S.DivButtoninformacoes>
                      informações
                    </S.DivButtoninformacoes>
                    </S.DivVagasPosition>
                  </S.DivVagas>
                       

                  </S.DivDescrition>

                </S.DivInformation>

              </S.DivPerfil>
            </S.DivPosition>

          </S.DivMain>
        
        </>
    )
}