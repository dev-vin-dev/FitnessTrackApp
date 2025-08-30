import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
      {/* Left side text */}
      <div className="max-w-lg space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Track Your Workouts.<br />Achieve Your Goals
        </h2>
        <p className="text-gray-600 text-lg">
          Log exercises, view progress, and stay motivated – anytime, anywhere.
        </p>
        <div className="flex gap-4">
          <Link to="/dashboard">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              Get Started
            </button>
          </Link>
          <button className="px-6 py-3 bg-red-100 text-red-600 rounded-lg shadow hover:bg-red-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="mt-10 md:mt-0">
        <img
          src="Images/Exercise.png"
          alt="Fitness Club"
          className="w-72"
        />
      </div>
    </section>
  );
};

export default Hero;
