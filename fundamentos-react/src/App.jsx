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
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default _ => (
    <div className={"App"}>
        <h1>Fundamentos React </h1>

        <div className={'Cards'}>
            <Card titulo={'#13 - Mega sena'}>
                <Mega/>
            </Card>

            <Card titulo={'#12 - Contador'}>
                <Contador numeroInicial={123}/>
            </Card>

            <Card titulo={'#11 - Componente controlado'}>
                <Input/>
            </Card>

            <Card titulo={'#10 - Comunicação indireta'}>
                <IndiretaPai/>
            </Card>

            <Card titulo={'#09 - Comunicação direta'}>
                <DiretaPai/>
            </Card>

            <Card titulo={'#08 - Renderização condicional'}>
                <ParOuImpar numero={21}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{email: 'ficeh@gomai.com'}}/>
            </Card>

            <Card titulo={'#07 - Desafio'}>
                <TabelaProdutos/>
            </Card>

            <Card titulo={'#06 - Repetição'}>
                <ListaAlunos/>
            </Card>

            <Card titulo={'#05 - Componente com filhos'}>
                <Familia sobrenome={'AAA'}>
                    <FamiliaMembro nome={'Pedro'}/>
                    <FamiliaMembro nome={'Felipe'}/>
                    <FamiliaMembro nome={'Alan'}/>
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
