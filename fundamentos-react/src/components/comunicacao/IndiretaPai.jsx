import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false

    //nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nomeParam)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'V' : 'F'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}