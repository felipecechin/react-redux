const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('BANCO', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('MongoDB conectado')
})