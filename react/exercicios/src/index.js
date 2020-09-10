import React from "react";
import ReactDOM from 'react-dom';
//componente com primeira letra maiuscula
import BomDia from "./componentes/BomDia";

import Multi from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";

//isso é JSX, React deve estar importado
const elemento = <h1>React 2</h1>

ReactDOM.render(<div>
        <Saudacao tipo={"Bom dia"} nome={"João"}/>
    </div>, document.getElementById('root')
)
