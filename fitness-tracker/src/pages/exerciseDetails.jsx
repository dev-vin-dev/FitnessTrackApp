import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ExerciseDetails() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExercise() {
      try {
        const response = await fetch(
          `https://wger.de/api/v2/exercisebaseinfo/${id}/`
        );
        const data = await response.json();
        setExercise(data);
      } catch (error) {
        console.error("Error fetching exercise:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchExercise();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading exercise...</p>;
  if (!exercise) return <p className="text-center mt-10">Exercise not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{exercise.name}</h1>

      {/* Image */}
      {exercise.images && exercise.images.length > 0 && (
        <img
          src={exercise.images[0].image}
          alt={exercise.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}

      {/* Description */}
      {exercise.description && (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: exercise.description }}
        />
      )}

      {/* Category & Equipment */}
      <div className="mt-4">
        {exercise.category && (
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-sm rounded mr-2">
            {exercise.category.name}
          </span>
        )}
        {exercise.equipment &&
          exercise.equipment.map((eq) => (
            <span
              key={eq.id}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded mr-2"
            >
              {eq.name}
            </span>
          ))}
      </div>
    </div>
  );
}
