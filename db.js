const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gigsApp', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User = mongoose.model('User',{
    id:String,
    userName:String,
    date:String,
    budget:String
})

module.exports = {
    User
}