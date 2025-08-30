import { useState } from "react";
import { useWorkouts } from "../context/WorkoutContext";

export default function LogWorkout() {
  const { addWorkout } = useWorkouts();
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      date: new Date().toLocaleString(),
    };

    addWorkout(newWorkout);

    // clear inputs
    setExercise("");
    setSets("");
    setReps("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Log a Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Workout
        </button>
      </form>
    </div>
  );
}
