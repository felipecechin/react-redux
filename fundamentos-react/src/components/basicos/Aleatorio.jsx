import React from "react";

export default props => (
    <h3>Número aleatório: {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</h3>
)