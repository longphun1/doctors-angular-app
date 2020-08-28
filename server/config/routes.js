const ctl = require('../controller/users')

const ct = require('../controller/appointments')

const c = require('../controller/payments')

module.exports = function(app) {
    app.post('/api/users/login', ctl.login)
    
    app.post('/api/users/new', ctl.create)

    app.get('/api/users/current', ctl.get)

    app.put('/api/users/edit/:id', ctl.update)

    app.get('/api/patient/:id', ctl.info)

    app.get('/api/patients', ctl.index)




    app.post('/api/users/appointment', ct.create)

    app.get('/api/appointments/all', ct.all)

    app.get('/api/appointments/:id', ct.view)

    app.put('/api/appointments/edit/:id', ct.edit)


    app.post('/api/cards/new', c.create)

}