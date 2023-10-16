const express = require("express");
const routes = express.Router();


const workoutController = require("../controllers/workoutController");

routes.get("/", workoutController.getAllWorkouts);
routes.get("/:workoutId", workoutController.getOneWorkout);
routes.post("/",workoutController.createNewWorkout);

routes.patch("/:workoutId",workoutController.updatedOneWorkout);
routes.delete("/:workoutId",workoutController.deleteOneWorkout);

module.exports = routes;