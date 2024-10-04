//import * as React from 'react';
import { CartVagasList } from "../cartVagasList/cartVagaslist";
import * as S from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { FiAlignJustify} from "react-icons/fi";
import { VscFilter } from "react-icons/vsc";



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
    <S.corAzulFundo>

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
                  

                  <S.btnFiltrar>Filtrar</S.btnFiltrar>
                </S.OpcaoTelasGrandes>
            </S.test>
            

              {/* Telas Pequenas */}
              <S.iconMenu  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                 <VscFilter />
                  {/* <S.opcaoIconMenu onClick={AlterarMenu}>
                    <S.opcaoiconMenuList>Opção 1</S.opcaoiconMenuList>
                    <S.opcaoiconMenuList>Opção 2</S.opcaoiconMenuList>
                    <S.opcaoiconMenuList>Opção 3</S.opcaoiconMenuList>
                  </S.opcaoIconMenu> */}
              </S.iconMenu>

                  {isMenuOpen && (
                    <nav className="dropdown-menu">
                      <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                      </ul>
                    </nav>
                  )}
  

            
          
            <CartVagasList />
          {/* </S.pesquisaWrapper> */}
      </S.conteiner>
    </S.corAzulFundo>
      );
}



