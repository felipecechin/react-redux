import React from "react";

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => props.quandoClicar('João', 50, true)}>Fornecer informações
            </button>
        </div>
    )
}