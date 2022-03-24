import React, {useEffect, useState, useContext} from "react";
import {Chart} from "react-google-charts";
import _ from 'lodash';
import { Link } from "react-router-dom";
import { TransactionsContext } from "../../hooks/TransactionsContext";

/*interface GraficoProps{
  //onde ta props, pode ser qualquer nome, é só mudar aqui e no App
  transactions : any;
}*/

export function Graficos(){
  const {transactions} = useContext(TransactionsContext);
  const [chartData, setChartData]=useState([]);

  const loadData = (transactions) => {
    const values = _.groupBy(transactions, (value) => 
    value.category);
    
    console.log("VALUES" + values)


    const result = _.map(values, (value, key) => [
            key,
            _.sumBy(values[key], (v) => v.amount),
          ]);

    console.log("RESULT" + result)
    return [['Categorias', 'Dados'], ... result];
  };



  useEffect(() => {
      setChartData(loadData(transactions))
  },[])
  return(
    <div>
    <Chart chartType="PieChart" data={chartData} width={"100%"} height={"400px"}/>
 
    </div>
    );

}