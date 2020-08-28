const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [
            true,
            "Please enter a first name"
        ]
    },
    last_name: {
        type: String,
        required: [
            true,
            "Please enter a last name"
        ]
    },
    age: {
        type: String,
    },
    email: {
        type: String,
        required: [
            true,
            "Please enter an email"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Please enter a password"
        ]
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

mongoose.model('User', UserSchema)