const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    collection: 'users'
}
);

module.exports = mongoose.model('user', userSchema);