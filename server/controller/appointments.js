const mongoose = require('mongoose');

const Appointment = mongoose.model('Appointment');

module.exports = {
    create(req,res){
        console.log('inside create app method')
        Appointment.create(req.body)
            .then(appointment => res.json({appointment}))
            console.log('made app')
    },

    all(req,res) {
        Appointment.find()
            .then(appointments => res.json({appointments}))
    },

    view(req,res) {
        Appointment.findById(req.params.id)
            .then(appointment => res.json({appointment}))
    },

    edit(req,res) {
        console.log('inside edit method')
        Appointment.findByIdAndUpdate(req.params.id, req.body)
            .then(appointment => res.json({appointment}))
    }
}