const _ = require('lodash')

const alunos = [
    {nome:'Joao',
    nota: 7.8},
    {nome: 'Felipe',
    nota: 9.0}
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)