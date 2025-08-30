import React, { useState } from "react";

const LogWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Workout logged: ${exercise}, ${sets} sets, ${reps} reps, ${weight}kg`);
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Log Workout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default LogWorkout;
