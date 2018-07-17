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

    getCurrentEvents:(req, res) => {
      db.events.findAll({
        where: {
          userId: req.params.userId,
          active: 1
          }
        }).then((data) => {
          res.json(data);
        }).catch((err) => {
          return err;
        })
      },

    getPastEvents:(req, res) => {
      db.events.findAll({
        where: {
          userId: req.params.userId,
          active: 2
          }
        }).then((data) => {
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
      },

      deleteEvent:(req, res) => {
        db.events.destroy({
          where: {
            id: req.params.id
          }
        })
      }


      // Update Attendees
      // updateAttendees:(req, res) => {
      //   db.events.update({
      //     attendees: req.body.attendees
      //   })
      // }

}