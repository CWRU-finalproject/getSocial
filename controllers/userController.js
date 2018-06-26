import db from "../models"

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
            console.log("Login Posted: "+ data);
        }).catch((err) => {
            res.send(err)
        })
    },
    // Gets User Info from DB
    getUser: (req,res) => {
        db.users.findOne(req.body)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err)
        })
    }
}