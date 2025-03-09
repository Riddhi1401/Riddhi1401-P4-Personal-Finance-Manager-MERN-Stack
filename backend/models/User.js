const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: { type: String, unique: true },
    contact: String,
    dob: Date,
    maritalStatus: String,
    username: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', UserSchema);
