import React from "react";
import ReactDOM from 'react-dom';
import Primeiro from "./componentes/Primeiro";

//isso é JSX, React deve estar importado
const elemento = <h1>React 2</h1>

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
