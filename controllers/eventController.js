var db = require("../models");

module.exports = {

      //Create event
      postEvent: (req, res, func) => {
        db.events.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            location: req.body.location,
            filter: req.body.filter,
            userId: 1
        }).then((data) => {
            func();
            return; 
        }).catch((err) => {
            func(err);
            return;
        })
      },
    // Find All Events
    getEvents:(req, res) => {
        db.events.findAll({
          where: {
            active: 1
          }
        })
          .then((data) => {
            res.json(data);
        }).catch((err) => {
            return err;
        })
      },

      // Filter Events
      filterEvents:(req, res) => {
        db.events.findAll({
          where: {
            active: 1,
            filter: req.params.filter
          }
        }).then((data) => {
          res.json(data);
        }).catch((err) => {
          return err;
        })
      }




      // //Update an event
      // update: function(req, res) {
      //   db.events
      //     .findOneAndUpdate({ id: req.params.id }, req.body)
      //     .then((data) => {
      //       return data;
      //   }).catch((err) => {
      //       return err;
      //   })
      // },
      // //Allows user to delete an event
      // remove: function(req, res) {
      //   db.events
      //     .findById({ id: req.params.id })
      //     .then(dbModel => dbModel.remove())
      //     .then((data) => {
      //       return data;
      //   }).catch((err) => {
      //       return err;
      //   })
      // }
}