import Navbar from "../../components/Header/Navbar";
import { TelaInicial } from "../../components/TelaInicial/TelaInicial";
import  { useState } from "react";
import ModalLogin from "../../components/modal/Modal";
import ModalForm from "../../components/modal/ModalForm";
import ModalCadastre from "../../components/modal/ModalCadastre";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openCadastre, setOpenCadastre] = useState(false);
  const[acesso,setAcesso] = useState(true)
  const navigate = useNavigate()
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpenForm(false);
  const handOpenNext = () => {
 //   setOpenForm(false);
  //  setTimeout(() => {
   //   setOpenCadastre(true);
   // }, 2000);
  };
 
  const handModalForm = ()=>{
    navigate('/HomeLogin'); 
    setAcesso(true);
  }
  const handPerfil =()=>{
    navigate('/Perfil'); 
  }

  return (
    <>
    <Navbar handleOpen={handleOpen} acesso={acesso} handPerfil={handPerfil} />
    <ModalLogin
        handleOpen={handleOpen}
        open={open}
       handModalForm={handModalForm}
      />

      <ModalForm
        open={openForm}
        handleOpen={handleClose}
        handOpenNext={handOpenNext}
      />
      <ModalCadastre open={openCadastre} handleOpen={handleClose} />

      <TelaInicial />
    </>
  );
}
