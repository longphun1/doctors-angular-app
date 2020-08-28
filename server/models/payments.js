const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    exp: {
        type: Number
    },
    cv: {
        type: Number
    }
}, {timestamps: true})

mongoose.model('Payment', PaymentSchema)