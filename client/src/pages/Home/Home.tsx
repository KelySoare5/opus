import Navbar from "../../components/Header/Navbar";
import { TelaInicial } from "../../components/TelaInicial/TelaInicial";
import  { useState } from "react";
import ModalLogin from "../../components/modal/Modal";
import ModalForm from "../../components/modal/ModalForm";
import ModalCadastre from "../../components/modal/ModalCadastre";
import { useNavigate } from 'react-router-dom';
import { About } from "../about/about";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openCadastre, setOpenCadastre] = useState(false);
  const[access,setAcesso] = useState(false)
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
    navigate('/HomeLoginEmpresa'); 
   
  }

  const handProfile =()=>{
    navigate('/'); 
  }

  return (
    <>
      <Navbar handleOpen={handleOpen} access={access} handProfile={handProfile} />
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
      <About/>
    </>
  );
}
