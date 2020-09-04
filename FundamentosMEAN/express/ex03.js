const express = require('express')
const server = express()

//Funciona para todos métodos HTTP
//Requisição deve começar com /api (prefixo)
server.use('/api', function (req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim')
})

server.use('/api', function (req, res) {
    console.log('Resposta')
    res.send('<h1>API</h1>')
})

server.listen(3000, () => console.log('Executando'))