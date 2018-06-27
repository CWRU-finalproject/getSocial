var user = require("../controllers/userController.js")

module.exports = (app) => {
    app.get("/api/user", function (req,res) {
        const result = user.getUser(req,res);
        res.json(result);
    });
    app.post("/api/user", function(req,res){
        user.postUser(req,res);
        res.sendStatus(200);
    })
}