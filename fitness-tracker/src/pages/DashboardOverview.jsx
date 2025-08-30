import { useWorkouts } from "../context/WorkoutContext";

export default function DashboardOverview() {
  const { workouts } = useWorkouts();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts yet. Log one to see it here!</p>
      ) : (
        <ul className="space-y-3">
          {workouts.map((w) => (
            <li
              key={w.id}
              className="border p-3 rounded shadow-sm bg-white flex justify-between"
            >
              <span>{w.exercise} — {w.sets} sets × {w.reps} reps</span>
              <span className="text-gray-500 text-sm">{w.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
