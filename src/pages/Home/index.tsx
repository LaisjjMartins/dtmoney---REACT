import React, {useState} from "react";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
//import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "../../components/NewTransactionModal";

import { BrowserRouter, Routes, Route } from "react-router-dom";

Modal.setAppElement('#root'); //Para acessibilidade, vai avisar do Modal
export function Home() {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  
  function handleOpen(){
  setTransactionModalOpen(true)
  }

  function handleClose(){
  setTransactionModalOpen(false)
  }


  return (  
    <>
      <Header props={handleOpen}  />
      <Dashboard />
      <NewTransactionModal 
      propsIsOpen={transactionModalOpen} 
      propsOnRequestClose={handleClose}/>

    </>
  );
}


