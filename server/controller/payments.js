const mongoose = require('mongoose');

const Payment = mongoose.model('Payment')

module.exports = {
    create(req,res){
        Payment.create(req.body)
            .then(card => res.json({card}))
    }
}