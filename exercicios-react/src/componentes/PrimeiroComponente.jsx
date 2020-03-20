import React from "react";

// export default function() {
//     return <h1>Primeiro componente!</h1>
// }

// export default () => <div>
//     <h1>Primeiro componente!</h1>
// </div>

let isLegal = true
export default (props) => <div>
    <h1>{props.valor}</h1>
    <h2>{props.aBcD}</h2>
    <p>{isLegal?'Sim':'Não'}</p>
</div>
