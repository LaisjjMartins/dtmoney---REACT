import styled from "styled-components";

export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{ //mudar a cor do placeholder do input
        color: var(--text-body);
    }

    & + input {  //Todo input que tiver outro em cima dele vai dar a margin top
        margin-top: 1rem;
    }
}

button[type="submit"]{ //escolhe especificamente o botao submit
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;


   &:hover{ //mudar a cor ao passar em cima
    filter: brightness(0.9);
   }
}
`;

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

`;

interface ButtonProps {
    propsIsActive: boolean;
    propsActiveColor: 'green' | 'red';
    
}

const color = {
    green: '#33CC95',
    red: '#E52E4D'
}
export const Button = styled.button<ButtonProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props => props.propsIsActive 
        ? color[props.propsActiveColor] : 'transparent')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    
    &:hover{
        border-color: #aaa;
        
    }
    img{
    width: 20px;
    height: 20px;
    }
    span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
    }
`;