import { NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      {/* Sidebar navigation */}
      <nav className="w-48 p-4 bg-gray-100 min-h-screen">
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard">Overview</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/log">Log Workout</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/exercises">Exercises</NavLink>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
