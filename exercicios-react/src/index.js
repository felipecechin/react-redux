import React from "react";
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, {CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaSilva from "./componentes/FamiliaSilva";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
import Contador from "./componentes/Contador";

const elemento = document.getElementById('root')
//ReactDOM.render(<h1>Olá 2</h1>, elemento)


ReactDOM.render(<div>
    <Contador numeroInicial={0}/>
    {/*<Familia sobrenome={"Ceqaaachin"}>*/}
    {/*    <Membro nome={"Felipe"}/>*/}
    {/*    <Membro nome={"Sergio"}/>*/}
    {/*</Familia>*/}
    {/*<ComponenteComFuncao/>*/}
    {/*<Pai/>*/}
    {/*<ComponenteClasse valor={"hafaeuh"}/>*/}
    {/*<FamiliaSilva/>*/}
    {/*<MultiElementos/>*/}
    {/*<A valor={"Olá A"}/>*/}
    {/*<B valor={"Olá B"}/>*/}
    {/*<PrimeiroComponente valor="Bom dia" aBcD={Math.pow(2,5)}/>*/}
</div>, elemento)
