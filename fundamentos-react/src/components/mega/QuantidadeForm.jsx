import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor={'quantidadeInput'}>Quantidade: </label>
            <input id={'quantidadeInput'} type={'number'} value={props.quantidade} onChange={e => props.setQuantidade(+e.target.value)}/>
        </div>
    )
}