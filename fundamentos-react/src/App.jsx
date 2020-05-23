import React from "react";
import './App.css'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Aleatorio2 from "./components/basicos/Aleatorio2";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default _ => (
    <div className={"App"}>
        <h1>Fundamentos React </h1>

        <div className={'Cards'}>
            <Card titulo={'#05 - Componente com filhos'}>
                <Familia sobrenome={'AAA'}>
                    <FamiliaMembro nome={'Pedro'} />
                    <FamiliaMembro nome={'Felipe'} />
                    <FamiliaMembro nome={'Alan'} />
                </Familia>
            </Card>

            <Card titulo={'#04 - Desafio número aleatório'} color={'#080'}>
                <Aleatorio max={12} min={1}/>
                <Aleatorio2 max={15} min={13}/>
            </Card>

            <Card titulo={'#03 - Fragmento'} color={'#E94C6F'}>
                <Fragmento/>
            </Card>

            <Card titulo={'#02 - Com parâmetro'}>
                <ComParametro titulo={"Segundo componente"} aluno={"Pedro"} nota={9.5}/>
            </Card>

            <Card titulo={'#01 - Primeiro componente'}>
                <Primeiro/>
            </Card>
        </div>

    </div>
);
