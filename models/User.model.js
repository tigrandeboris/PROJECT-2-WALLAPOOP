const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true},
    password: { type: String, required: true, minlength: 4, maxlength: 10},
    phone: { type: String, required: true, unique: true, minlength:9, maxlength:9},
    email: { type: String, required: true, unique: true}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
