const Workout = require("../models/workout.js");
const { mongo } = require("mongoose");

// returns all workouts in descending order
module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    
    app.get("/api/workouts/range", function (req, res) {
        Workout.find({})  
            .sort({ day: -1 })
            .limit(7)
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // creates a workout
    app.post("/api/workouts", function (req, res) {
        Workout.create(data = {
            day: new Date(),
            exercises: []
        })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    });

    // updates a given workout by pushing a workout to its exercises array
    app.put("/api/workouts/:id", function (req, res) {
        Workout.update(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercises: req.body
                }
            },
            (error, edited) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(edited);
                }
            }
        );
    });
};