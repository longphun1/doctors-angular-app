const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    first_name: {
        type: String,
 
    },
    last_name: {
        type: String,
  
    },
    age: {
        type: String,
  
    },
    time: {
        type: Date,
      
    },
    comment: {
        type: String
    },
    note: {
        type: String
    }
})

mongoose.model('Appointment', AppointmentSchema)