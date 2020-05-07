const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('BANCO MONGO', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(function () {
    console.log('ok')
});