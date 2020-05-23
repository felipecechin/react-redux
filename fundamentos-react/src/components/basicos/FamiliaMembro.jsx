import React from "react";

export default props => {
    return (
        <div key={props.key}>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}