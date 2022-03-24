import React from "react";
import logoSVG from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import {useNavigate} from 'react-router-dom';

interface HeaderPorps{
    //onde ta props, pode ser qualquer nome, é só mudar aqui e no App
    props : ()=> void;
}

export function Header({props}: HeaderPorps) {
    const history = useNavigate();
    return (
        <Container>
            <Content>
                <img src={logoSVG} alt="dt money" />
                <button type="button" onClick={props}>
                    Nova transação
                </button>
                <button onClick={() => {history('/gastos')}}>Graficos</button>

            </Content>
            
        </Container>
    )
}