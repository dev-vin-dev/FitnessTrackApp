import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const response = await fetch(
          "https://wger.de/api/v2/exerciseinfo/?language=2&limit=20"
        );
        const data = await response.json();
        setExercises(data.results);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading exercises...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Exercises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((ex) => (
          <Link
            to={`/exercises/${ex.id}`}
            key={ex.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
          >
            {/* Exercise Image */}
            {ex.images && ex.images.length > 0 && (
              <img
                src={ex.images[0].image}
                alt={ex.name}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2">{ex.name}</h2>

              {/* Only show description if available */}
              {ex.description && ex.description.trim() !== "" && (
                <p
                  className="text-gray-700 text-sm mb-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: ex.description }}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
