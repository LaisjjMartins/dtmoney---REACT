import styled from "styled-components";

export const Container = styled.div` //tag main no html é relacionado ao topico ou conteudo principal da aplicacao
display: grid; //3 itens do mesmo tamanho
grid-template-columns: repeat(3, 1fr); //3 colunas de tamanhos iguais
gap: 2rem;
margin-top: -10rem;


div{
background: var(--shape);
padding: 1.5rem 2rem;
border-radius: 0.25rem;
color: var(--text-title);

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

strong{
    display: block; //por padrão é inline e ai não funciona o margin, por isso muda para block
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
}
&.total-background{ //A DIV DESSA CLASSE
    background: var(--green);
    color: #fff;
}

}`;