import styled from "styled-components";

export const Container = styled.header`
background-color: var(--blue);
`

export const Content = styled.div`
max-width: 1120px; //tamanho maximo
margin: 0 auto;  //centraliza
padding: 2rem 1rem 12rem;  //1rem equivale ao tamanho do font-size do html é configurado lá no global
display: flex;
align-items: center;
justify-content: space-around;

button{
    width: 14rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; //Vai aplicar o tempo do mouse em cima do botao, de acordo com o filter

    &:hover { //passar em cima
    filter: brightness(0.9); //pode fazer VARIAS COISAS
    }
    
}
`