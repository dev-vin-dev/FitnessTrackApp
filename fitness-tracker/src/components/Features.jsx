import React from "react";

const Features = () => {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-10 py-16 text-center">
      <div className="space-y-4">
        <img
          src="Images/Log.png"
          alt="Log Workouts"
          className="w-16 mx-auto"
        />
        <h3 className="text-xl font-bold">Log Workouts</h3>
      </div>
      <div className="space-y-4">
        <img
          src="Images/Track.png"
          alt="Track Progress"
          className="w-16 mx-auto"
        />
        <h3 className="text-xl font-bold">Track Progress</h3>
      </div>
      <div className="space-y-4">
        <img
          src="Images/Track exercise.png"
          alt="Discover Exercises"
          className="w-16 mx-auto"
        />
        <h3 className="text-xl font-bold">Discover Exercises</h3>
      </div>
    </section>
  );
};

export default Features;