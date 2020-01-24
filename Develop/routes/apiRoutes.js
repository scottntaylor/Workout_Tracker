// const router = require("express").Router();
const db = require("../models");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/api/workouts", function (req, res) {
        //MongoDB to show workouts
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/:id", function (req, res) {
        //MongoDB to show specific workout
        db.Workout.findById(id)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // app.post("/api/workouts", function (req, res) {
    //     //MongoDB to create new workout
    //     console.log(req.body);
    //     db.Workout.insert(req.body)
    //         .then(newWorkout => {
    //             res.json(newWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });
}