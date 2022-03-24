import React, { useState, FormEvent, useContext } from "react";
import Modal from 'react-modal';
import { api } from "../../services/api";
import { TransactionsContext } from "../../hooks/TransactionsContext";


import CloseSVG from "../../assets/close.svg";
import IncomeSVG from "../../assets/income.svg";
import OutcomeSVG from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer, Button } from "./styles";

interface NewTransactionModalProps {
    propsIsOpen: boolean;
    propsOnRequestClose: () => void;
}

export function NewTransactionModal({ propsIsOpen, propsOnRequestClose }: NewTransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext);
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    async function HandleNewTransaction(event: FormEvent) { //Vai pegar o event padrão do form para tirar as configurações padrões que vem com ele lá do html, como por exemplo, recarregar a pagina ao clicar no botao. 
        event.preventDefault(); //Não vai mais recarregar, previniu o funcionamento padrão.

       await createTransaction({
            title,
            amount: value,
            category,
            type
        })
        
        setTitle('');
        setValue(0);
        setCategory('');
        setType('');

        propsOnRequestClose();
        
    }

    return (
        <Modal
            isOpen={propsIsOpen}
            onRequestClose={propsOnRequestClose}
            overlayClassName="react-modal-overlay" //PARTE DE FORA - Dando novos nomes para as classes do Modal, para poder definir tamanhos e cores, tira a feita automatico pelo Modal
            className="react-modal-content" //MODAL EM SI - Faz essas estilizações no style Global pq vai usar de forma global o Modal... Em varias telas
        >
            <button type="button" onClick={propsOnRequestClose} className="react-modal-close">
                <img src={CloseSVG} alt="Fechar modal" />
            </button>
            <Container onSubmit={HandleNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)} />

                <input
                    placeholder="Valor"
                    value={value}
                    type="number"
                    onChange={event => setValue(Number(event.target.value))} /> 

                <TransactionTypeContainer>
                    <Button type="button"
                        propsIsActive={type === 'deposit'}
                        propsActiveColor="green"
                        onClick={() => { setType('deposit') }}>
                        <img src={IncomeSVG} alt="Entrada" />
                        <span>Entrada</span>
                    </Button>
                    <Button type="button"
                        propsIsActive={type === 'withdraw'}
                        propsActiveColor="red"
                        onClick={() => { setType('withdraw') }}>
                        <img src={OutcomeSVG} alt="Saida" />
                        <span>Saída</span>
                    </Button>
                </TransactionTypeContainer>


                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value) } />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}