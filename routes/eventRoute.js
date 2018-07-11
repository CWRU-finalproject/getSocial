//const router = require("express").Router();
const event = require("../controllers/eventController.js");

module.exports = (app) => {
    
    app.post("/api/event",function(req,res){
        event.postEvent(req, res, function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200); 
        });
    });

    app.get("/api/events", function(req,res){
        event.getEvents(req, res, function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200); 
        });
    });

    app.get("/api/events/:filter", function(req, res){
        event.filterEvents(req, res, function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.sendStatus(200);
        });
    });

    app.put("/api/event",function(req,res){
        event.update(req, res, function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200); 
        });
    });
    app.delete("/api/event",function(req,res){
        event.remove(req,  res, function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200); 
        });
    });
}