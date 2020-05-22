import React from "react";

export default props => {
    const {min, max} = props;
    // const [a,b] = [1,2]
    // const {c,d,x} = {c:12, d:45, x:'teste'}
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <h3>Número aleatório: {aleatorio}</h3>
    )
}