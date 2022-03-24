import React from "react";
import { TransactionsTable } from "../TransactionsTable";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard(){ //Esse é o container de fora que vai ter os card
    return(
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}