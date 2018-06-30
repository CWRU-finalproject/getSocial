var event = require("../controllers/eventController.js");

module.exports = (app) => {
    app.get("/api/events", function(req,res){
        event.findAll(req,res);
    });
    app.post("/api/event",function(req,res){
        event.create(req,res);
    });
    app.put("/api/event",function(req,res){
        event.update(req,res);
    });
    app.delete("/api/event",function(req,res){
        event.remove(req,res);
    })
}