import React from "react";

export default props => {
    return (
        <div>
            <button onClick={props.setNumerosGerados}>Gerar novos números</button>
        </div>
    )
}