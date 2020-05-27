import React from "react";
import Numeros from "./Numeros";
import QuantidadeForm from "./QuantidadeForm";
import Botao from "./Botao";

class Mega extends React.Component {
    state = {
        quantidade: this.props.quantidade || 7,
        numerosGerados: []
    }

    setQuantidade = (novaQuantidade) => {
        if (novaQuantidade > 0) {
            this.setState({
                quantidade: novaQuantidade
            })
        }
    }

    gerarNumeros = (quantidade) => {
        var arrayNumeros = [];
        var numero;
        var encontrado;
        while (true) {
            numero = parseInt(Math.floor(Math.random() * 99 + 1))
            encontrado = arrayNumeros.find(function (element) {
                return element === numero
            }, numero)
            console.log(encontrado)
            if (!encontrado) {
                arrayNumeros.push(numero)
            }
            console.log(arrayNumeros.length)
            if (arrayNumeros.length === quantidade) {
                break;
            }
        }
        return arrayNumeros.sort(function (a, b) {
            return a - b;
        })
    }

    setNumerosGerados = () => {
        const arrayNumeros = this.gerarNumeros(this.state.quantidade)
        this.setState({
            numerosGerados: arrayNumeros
        })
    }

    render() {
        return (
            <div>
                <Numeros numeros={this.state.numerosGerados}/>
                <QuantidadeForm quantidade={this.state.quantidade} setQuantidade={this.setQuantidade}/>
                <Botao setNumerosGerados={this.setNumerosGerados}/>
            </div>
        )
    }
}

export default Mega