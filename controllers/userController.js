var db = require("../models");

module.exports = {
    // Creates User Profile in DB
    postUser: (req,res,func) => {
        db.users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            major: req.body.major,
            year: req.body.year
        }).then((data) => {
            console.log("Login Posted");
            func()
            return;
        }).catch((err) => {
            func(err)
            return;
        })
    },
    // Gets User Info from DB
    getUser: (req,res) => {
        db.users.findOne({
            where: {
                email:req.body.email,
                password:req.body.password
            }
        })
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },
    
    getAllUsers: (req, res) => {
        db.users.findAll({
            where: {
                active: 1
            }
        }).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}