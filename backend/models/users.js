const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    role: {
        type: String,
        enum: ['admin', 'operator'],
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    last_login: {
        type: Date
    }
});

// Hooks

// Model and export
const User = mongoose.model('User', userSchema);
module.exports = User;
