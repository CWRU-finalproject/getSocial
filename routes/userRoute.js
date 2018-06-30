var user = require("../controllers/userController.js")

module.exports = (app) => {
    app.get("/api/user", function (req,res) {
        user.getUser(req,res);
        
    });
    app.post("/api/user", function(req,res){
        user.postUser(req,res);
        
    })
    app.get("/api/users",function(req,res){
        user.getAllUsers(res,res);
    })
}