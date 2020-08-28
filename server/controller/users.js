const mongoose = require('mongoose');

const User = mongoose.model('User');

const bcrypt = require('bcrypt');

module.exports = {
    login(req, res) {
        User.findOne({ email: req.body.email}, function(err,user) {
            if(!user) {
                return res.json({ result: 'failed'});
            }

            bcrypt.compare(req.body.password, user.password, function(err,result) {
                if(result) {
                    req.session.userId = user._id;
                    return res.json({
                        result: 'success'
                    });
                }

                res.json({result: 'failed'});
            })
        })
    },

    create(req,res){
        bcrypt.hash(req.body.password, 10, function(err,hash) {
            User.create({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email, password: hash, address: req.body.address, phone: req.body.phone},
                function(err, user) {
                    console.log(err, user)
                    req.session.userId = user._id
                    res.json({
                        result: 'success'
                    })
                })
        })
    },
    
    get(req,res) {
        const userId = req.session.userId;
        if(!userId) {
            return res.json({ user: null});
        }
        User.findById(userId, function(err, user) {
            res.json({
                user: {
                    admin: user.admin,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    id: user._id
                }
            })
        })
    },

    update(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(user => res.json({user}))
    },

    info(req,res){
        User.findById(req.params.id)
            .then(user => res.json({user}))
    },

    index(req,res){
        console.log('inside index method')
        User.find()
            .then(users => res.json({users}))
    }
}