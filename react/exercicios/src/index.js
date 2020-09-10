import React from "react";
import ReactDOM from 'react-dom';
//componente com primeira letra maiuscula
import BomDia from "./componentes/BomDia";

import Multi from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

//isso é JSX, React deve estar importado
const elemento = <h1>React 2</h1>

ReactDOM.render(<div>
        <Pai nome={"Paulo"} sobrenome={"Silva"}>
            <Filho nome={"Pedro"}/>
            <Filho nome={"Carla"}/>
        </Pai>
    </div>, document.getElementById('root')
)
