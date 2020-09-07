//const Pessoa = require('./pessoa')

import Pessoa from "./pessoa";
import './assets'

//sistema de módulos ecmascript
//usa export e import

//sistema de módulos commonjs
//usa module.exports e require

const atendente = new Pessoa
console.log(atendente.cumprimentar())