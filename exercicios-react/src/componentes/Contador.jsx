import React, {Component} from "react";

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(1)
    }

    menosUm = () => {
        this.alterarNumero(-1)
    }

    alterarNumero = diferenca => {
        this.setState( {
            numero: this.state.numero + diferenca
        })
    }


    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
            </div>
        )
    }
}
