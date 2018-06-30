var db = require("../models");

module.exports = {
    // Creates User Profile in DB
    postUser: (req,res) => {
        db.users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            major: req.body.major,
            year: req.body.year
        }).then((data) => {
            console.log("Login Posted: "+ data.json);
            
            res.status(200);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            })
        })
    },
    // Gets User Info from DB
    getUser: (req,res) => {
        db.users.findOne({
            email:req.body.email,
            password:req.body.password
        })
        .then((data) => {
            //if there are no matches
            if(!data){
                console.log("no data")
                res.status(404)
            }
            console.log(data)
            res.json(data);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
    },
    //Get all users in api for testing
    getAllUsers: (req,res) => {
        db.users.findAll({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
    }
}