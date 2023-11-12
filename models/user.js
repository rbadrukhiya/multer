const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schema = new Schema({
    image:({
        type:String
    })
})


const MyModel = mongoose.model('demo', schema);
module.exports = MyModel