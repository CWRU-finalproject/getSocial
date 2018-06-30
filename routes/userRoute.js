var user = require("../controllers/userController.js")

module.exports = (app) => {
    app.get("/api/user", function (req,res) {
        user.getUser(req,res);
        
    });
    app.post("/api/user", function(req,res){
        user.postUser(req,res,function(err){
            if(err){
                console.log(err)
                res.sendStatus(500)
                return;
            }
           res.sendStatus(200); 
        });
        
    })
}