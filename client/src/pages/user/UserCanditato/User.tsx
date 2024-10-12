import Navbar from "../../../components/Header/Navbar";
import { useNavigate } from 'react-router-dom';
import  { useState } from "react";
import * as S from './styles';
import logo from "../../../assets/img/opus_logo.jpeg";
import perfil from "../../../assets/img/perfil_exemple.png";


export const User: React.FC = ()=>{

    // const navigate = useNavigate()
    const[access,setAcesso] = useState(false)
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

      const handProfile =()=>{
       console.log("clicou")
      }

    return(

        <>
         <Navbar handleOpen={handleOpen} access={access} handProfile={handProfile} />
          <S.DivMain>
            <S.DivPosition>
              <S.DivProfile>
                <S.DivLogo>
                  <img src={logo} width={100} height={100}/>
                </S.DivLogo>
                
                <S.DivInformation>
                  <S.Divelements>
                    <S.DivPhoto>
                      <img src={perfil} height={150} width={150}/>
                    </S.DivPhoto>

                    <S.DivButtom>
                      editar perfil
                    </S.DivButtom>

                  </S.Divelements>

                  <S.DivDescrition>
                    <S.DivBox>
                        
                        <S.DivBox2>
                        <S.DivNameNumber>
                          <S.H2>Carlos Eduardo ,</S.H2>
                          <S.P> 22 Anos</S.P>
                        </S.DivNameNumber>
                       
                       <S.P2>Casa do Zezin N 310</S.P2>
                        </S.DivBox2>

                        <S.DivBox2>
                          <S.P>zezim2469@gmail.com</S.P>
                          <S.P2>(86) 40028922</S.P2>
                        </S.DivBox2>

                    </S.DivBox>
                     
                     <S.H2>Sobre</S.H2>

                    <S.DivBox>
                        <S.P>
                        Adc. Engenharia Civil, Top 250 no Call of Duty: Warzone, conhecido como Zezim entre 
                        amigos, e por mais gostoso que eu pareça, eu sou divosiado.
                        </S.P>
                    </S.DivBox>

                    <S.H2>
                      Experiência
                    </S.H2>

                    <S.DivBox>
                        <S.DivBox2>
                          <S.DivBox2>
                            <S.P3>Cargo</S.P3>
                              <S.P>engenheiro chefe</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                        <S.DivBox2>
                        <S.DivBox2>
                            <S.P3>Empresa</S.P3>
                              <S.P>Nasa</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                        <S.DivBox2>
                        <S.DivBox2>
                            <S.P3>Duração</S.P3>
                              <S.P>31/02/2020-01/04/2024</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                    </S.DivBox>
                        
                        <S.H2>
                          Formação
                        </S.H2>

                    <S.DivBox>
                        <S.DivBox2>
                          <S.DivBox2>
                            <S.P3>formação </S.P3>
                              <S.P>engenharia civil</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                        <S.DivBox2>
                        <S.DivBox2>
                            <S.P3>Instituição</S.P3>
                              <S.P>Uninassau</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                        <S.DivBox2>
                        <S.DivBox2>
                            <S.P3>status</S.P3>
                              <S.P>04/03/2020-16/01/2025</S.P>
                          </S.DivBox2>
                        </S.DivBox2>
                    </S.DivBox> 

                  </S.DivDescrition>

                </S.DivInformation>

              </S.DivProfile>
            </S.DivPosition>

          </S.DivMain>
        </>
    )
   

}