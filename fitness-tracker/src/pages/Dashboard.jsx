import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Workouts</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">42</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Exercises Logged</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">120</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Progress Streak</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">7 days</p>
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
        <ul className="space-y-4">
          <li className="flex justify-between border-b pb-2">
            <span>🏋️ Bench Press – 3 sets x 10 reps</span>
            <span className="text-gray-500">Aug 28</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>🏃 Running – 5 km</span>
            <span className="text-gray-500">Aug 27</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>🚴 Cycling – 20 km</span>
            <span className="text-gray-500">Aug 26</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
