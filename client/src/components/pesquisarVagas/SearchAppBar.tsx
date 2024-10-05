//import * as React from 'react';
import { CartVagasList } from "../cartVagasList/cartVagaslist";
import * as S from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { VscFilter } from "react-icons/vsc";
import { FiltrarVagas } from "../filtrosVagas/FiltrosVagas";



export const SearchAppBar:React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Ao clicar no icon é para aparecer o menu
  
  
  // Função que altera o menu completo para IconMenu
  
  // const AlterarMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);

  // };
  
  // useEffect(() => {
  //   addEventListener('resize', AlterarMenu);
  //   AlterarMenu(); // Para aplicar a lógica imediatamente
  //   return () => {
  //     window.removeEventListener('resize', AlterarMenu);
  //   };
  // }, []);



  return (
  <>
  
      <S.tituloVagasRecentes>
        Vagas recentes
      </S.tituloVagasRecentes>

      <S.conteiner>


         
          {/* <S.pesquisaWrapper> */}

            {/* Tela Grandes */}
            <S.test>  

              <S.Search>

                    <S.SearchIconWrapper>
                      <SearchIcon />
                      
                    </S.SearchIconWrapper>
                    
                    <S.StyledInputBase
                      placeholder="Procurar vaga..."
                      inputProps={{ 'aria-label': 'search' }}/>



                  </S.Search>

                     {/* Telas Pequenas */}
                    <S.iconMenu  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <VscFilter size={18} />
                        {/* <S.opcaoIconMenu onClick={AlterarMenu}>
                          <S.opcaoiconMenuList>Opção 1</S.opcaoiconMenuList>
                          <S.opcaoiconMenuList>Opção 2</S.opcaoiconMenuList>
                          <S.opcaoiconMenuList>Opção 3</S.opcaoiconMenuList>
                        </S.opcaoIconMenu> */}
                    </S.iconMenu>

                <S.OpcaoTelasGrandes>

                  {/* Tipo de candidato */}
                  <S.tipoContratoWrapper>
                    <S.tipoContratoTexto>Tipo de contrato: </S.tipoContratoTexto>
                    <S.tipoContratoSelect>
                      <S.tipoContratoOpcao>Todas</S.tipoContratoOpcao>
                      <S.tipoContratoOpcao>Aprendiz</S.tipoContratoOpcao>
                      <S.tipoContratoOpcao>Estágio</S.tipoContratoOpcao>
                      <S.tipoContratoOpcao>CLT</S.tipoContratoOpcao>
                      <S.tipoContratoOpcao>PJ</S.tipoContratoOpcao>
                    </S.tipoContratoSelect>
                  </S.tipoContratoWrapper>

                  {/* Vagas recentes/semana/mes */}
                  <S.filtrarVagasWrapper>
                    <S.filtrarVagasTexto>Vagas: </S.filtrarVagasTexto>
                    <S.filtrarVagasSelect id="Options">
                      <S.filtrarVagas value={"recente"}>Recente</S.filtrarVagas>
                      <S.filtrarVagas value={"semana"}>Uma semana</S.filtrarVagas>
                      <S.filtrarVagas value={"mes"}>um mês</S.filtrarVagas>
                    </S.filtrarVagasSelect>
                  </S.filtrarVagasWrapper>
                    {/* <ArrowDropDownIcon/> */}
                  

                  <S.btnFiltrar><VscFilter size={28} /></S.btnFiltrar>
                </S.OpcaoTelasGrandes>
            </S.test>
            

             
                  {isMenuOpen && (
                    <nav className="dropdown-menu">
                      <FiltrarVagas/>
                    </nav>
                  )}
  

            
          
            <CartVagasList />
          {/* </S.pesquisaWrapper> */}
      </S.conteiner>
  </>

      );
}



