import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Aleatorio2 from "./components/basicos/Aleatorio2";
import Card from "./components/layout/Card";

export default _ => (
    <div id={"app"}>
        <h1>Fundamentos React </h1>
        <Card titulo={'#04 -Desafio número aleatório'}>
            <Aleatorio max={12} min={1}/>
            <Aleatorio2 max={15} min={13}/>
        </Card>

        <Card titulo={'#03 -Fragmento'}>
            <Fragmento/>
        </Card>

        <Card titulo={'#02 -Com parâmetro'}>
            <ComParametro titulo={"Segundo componente"} aluno={"Pedro"} nota={9.5}/>
        </Card>

        <Card titulo={'#01 - Primeiro componente'}>
            <Primeiro/>
        </Card>
    </div>
);
