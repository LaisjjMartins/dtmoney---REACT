import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransactionProvider } from "./hooks/TransactionsContext";
import { Graficos } from './pages/Graficos';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

export function App(){

  return(
    <>
     <TransactionProvider>
      <BrowserRouter>

        <Routes>
         
          <Route  path="/" element={<Home />} />
          <Route  path="/gastos" element={<Graficos/>} />
        </Routes>
      
        </BrowserRouter>
        </TransactionProvider>
        <GlobalStyle/>
        </>
    );

}
