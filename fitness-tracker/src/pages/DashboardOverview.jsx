import React from "react";

const DashboardOverview = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Dashboard Overview</h1>
      <p className="text-gray-600 mb-6">Welcome back! Here’s your fitness summary.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Workouts</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Hours</h2>
          <p className="text-3xl font-bold mt-2">25h</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Calories Burned</h2>
          <p className="text-3xl font-bold mt-2">7,500</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
