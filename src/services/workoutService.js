const Workout = require('../database/Workout');

const getAllWorkouts = async () => {
    try{
        const allWorkouts = Workout.getAllWorkouts();
        return allWorkouts;
    }
    catch(error)
    {
        throw error;
    }
}

//GET

const getOneWorkout = async (workoutId) => {
    try{
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
    }
    catch(error)
    {
        throw error;
    }
}

//POST 


const createNewWorkout = async (newWorkout) => {
    try{
        const createdWorkout= Workout.createNewWorkout(newWorkout);
        return createdWorkout;
    }
    catch(error)
    {
        throw error;
    }
}

const updatedOneWorkout = async (workoutId,changes) => {
    try{
        const updatedWorkout = Workout.updateOneWorkout(workoutId,changes);
        return updatedWorkout;
    }
    catch(error)
    {
        throw error;
    }
}

const deleteOneWorkout = async (workoutId) => {
    try{
        const deletedWorkout = Workout.deleteOneWorkout(workoutId);
        return deletedWorkout;
    }
    catch(error)
    {
        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updatedOneWorkout,
    deleteOneWorkout
}