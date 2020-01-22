// const router = require("express").Router();
const db = require("./Develop/models");

module.exports = function (app) {
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

    app.post("/api/workouts", function (req, res) {
        //MongoDB to create new workout
        console.log(req.body);
        db.Workout.insert(req.body)
            .then(newWorkout => {
                res.json(newWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}