const user = require("../controllers/userController.js");
//const router = require('express').Router();

module.exports = (app) => {
    app.get("/api/user", function (req,res) {
        user.getUser(req,res);
        
    });
    app.post("/api/user", function(req,res){
        user.postUser(req,res, function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200);
        });
        
    });
    app.get("/api/users", function(req, res) {
    user.getAllUsers(req, res, function(err){
        if(err){
            console.log(err)
            res.sendStatus(500)
            return;
        }
       res.sendStatus(200);
    });
    });
}
