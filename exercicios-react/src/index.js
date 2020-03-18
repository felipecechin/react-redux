import React from "react";
import ReactDOM from 'react-dom'

const elemento = document.getElementById('root')
//ReactDOM.render(<h1>Olá 2</h1>, elemento)
const jsx = <ul>
    <li>1)Pedro</li>
    <li>2)Maria</li>
</ul>
ReactDOM.render(jsx, elemento)
