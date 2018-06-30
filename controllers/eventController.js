var db = require("../models")

module.exports = {
           // Find Event
    findAll: function(req, res) {
        db.Event
          .find(req.query)
          .sort({ date: -1 })
          .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
      },
      //Create event
      create: function(req, res) {
        db.Event.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
        }).then(() => {
            res.status(200);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
      },
      //Update an event
      update: function(req, res) {
        db.Event
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((data) => {
            console.log(data.affectedrows);
            res.status(200);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
      },
      //Allows user to delete an event
      remove: function(req, res) {
        db.Event
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then((data) => {
            console.log(data.affectedrows);
            res.status(200);
        }).catch((err) => {
            res.status(500).json({
                error: err.message
              })
        })
      }
}