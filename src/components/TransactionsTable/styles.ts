import styled from "styled-components";

export const Container = styled.div` //tag main no html é relacionado ao topico ou conteudo principal da aplicacao
margin-top: 4rem;

table{
    width: 100%;
    border-spacing: 0 0.5rem; //espaçamento dentro da tabela
}

th{
    color: var(--text-body);
    font-weight: 400;
    padding: 0rem 2rem;
    text-align: left;
    line-height: 1.5rem;
}

td{
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child{ //No primeiro td, titulo
        color: var(--text-title);
    }
    &.withdraw{ //quando for a classe retirada no td
        color: var(--red)
    }
    &.deposit{ //quando for a classe entrada no td
        color: var(--green)
}
}
`;