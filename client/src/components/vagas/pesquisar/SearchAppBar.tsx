//import * as React from 'react';
import { CartVagas } from "../cartVagas/CartVagas";
import * as S from "./styled"

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const SearchAppBar:React.FC = () => {

  return (
    <S.corAzulFundo>

      <S.conteiner>


          {/* <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
            <S.Search>
                  <S.SearchIconWrapper>
                    <SearchIcon />
                  </S.SearchIconWrapper>
                  <S.StyledInputBase
                    placeholder="Procurar vaga..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </S.Search>
                {/* <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  MUI
                </Typography> */}
          
  {/* 
              </Toolbar>
            </AppBar>
          </Box> */} 


          <S.pesquisaWrapper>
            <S.test>  

              <S.Search>
                    <S.SearchIconWrapper>
                      <SearchIcon />
                    </S.SearchIconWrapper>
                    <S.StyledInputBase
                      placeholder="Procurar vaga..."
                      inputProps={{ 'aria-label': 'search' }}/>

                  </S.Search>


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
            </S.test>

            <CartVagas />
          </S.pesquisaWrapper>
      </S.conteiner>
    </S.corAzulFundo>
      );
}



