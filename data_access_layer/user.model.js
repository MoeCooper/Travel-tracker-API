const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//username validations
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minlength: 2
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;