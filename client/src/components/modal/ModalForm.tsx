import * as S from "./stylesForm";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";

interface ModalProps {
  handleOpen: () => void;
  open: boolean;
  // handModalForm: () => void;
}

export default function ModalForm({
  handleOpen,
  open,
  // handModalForm,
}: ModalProps) {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <S.Modal>
            <S.PositionI>
              <FiX onClick={handleOpen} />
            </S.PositionI>
            <S.conteiner>
              <S.cx>
                <S.H1>Formulario</S.H1>
              </S.cx>

              <S.inputsForm>
                <S.inputs>
                  <S.tituloTwo type="text" placeholder="Nome" />
                  <S.tituloTwo type="text" placeholder="senha" />
                </S.inputs>
                <S.inputsTwo>
                  <S.titulo type="text" placeholder="data de nasciemento" />

                  <S.titulo type="text" placeholder="telefone" />
                </S.inputsTwo>
              </S.inputsForm>

              <S.divTextarea>
                <S.inputText placeholder="sobre" />
              </S.divTextarea>

              <S.inputsFormTwo>
                <S.inputs>
                  <S.titulo type="text" placeholder="Cargo" />

                  <S.titulo type="text" placeholder="Formação" />
                </S.inputs>

                <S.inputs>
                  <S.titulo type="text" placeholder="Empresa" />

                  <S.titulo type="text" placeholder="Instituição" />
                </S.inputs>

                <S.inputs>
                  <S.titulo type="text" placeholder="Duração" />

                  <S.titulo type="text" placeholder="Duração" />
                </S.inputs>

                <S.inputs>
                  <S.buttonAdd>+</S.buttonAdd>
                  <S.buttonAdd>+</S.buttonAdd>
                </S.inputs>
              </S.inputsFormTwo>

              <S.cx>
                <S.btnEntrar>Curriculo</S.btnEntrar>
              </S.cx>
              <S.cx>
                <S.btnEntrar>Entrar</S.btnEntrar>
              </S.cx>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
