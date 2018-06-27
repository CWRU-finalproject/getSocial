const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

const db = require("./models");

const seeds = require("./seeds.js");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
require("./routes/userRoute.js")(app);

db.sequelize.sync({force: true}).then(() => {
	seeds(db.sequelize.queryInterface, db.Sequelize);
	app.listen(PORT, function(){
	    console.log(`Server running on ${PORT}`)
	})
});
