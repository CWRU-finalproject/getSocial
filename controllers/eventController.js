var db = require("../models")

module.exports = {
           // Find Event
    findAll: function(req, res) {
        db.Event
          .find(req.query)
          .sort({ date: -1 })
          .then((data) => {
            return data;
        }).catch((err) => {
            return err;
        })
      },
      //Create event
      create: function(req, res) {
        db.Event.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
        }).then((data) => {
            return data;
        }).catch((err) => {
            return err;
        })
      },
      //Update an event
      update: function(req, res) {
        db.Event
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((data) => {
            return data;
        }).catch((err) => {
            return err;
        })
      },
      //Allows user to delete an event
      remove: function(req, res) {
        db.Event
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then((data) => {
            return data;
        }).catch((err) => {
            return err;
        })
      }
}