
import React, {useState} from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/TransactionsContext";

Modal.setAppElement('#root'); //Para acessibilidade, vai avisar do Modal
export function App() {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  
  function handleOpen(){
  setTransactionModalOpen(true)
  }

  function handleClose(){
  setTransactionModalOpen(false)
  }


  return (

    <TransactionProvider>
      <Header props={handleOpen}  />
      <Dashboard />
      <NewTransactionModal 
      propsIsOpen={transactionModalOpen} 
      propsOnRequestClose={handleClose}/>
      <GlobalStyle />
    </TransactionProvider>
  );
}


