import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CourseDetails = () => {
  const { id } = useParams(); // get course id from URL

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch course");
        }

        const data = await res.json();

        // format course same as Courses.jsx
        setCourse({
          id: data.id,
          title: data.title,
          category: data.category,
          price: data.price,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Loading state
  if (loading) {
    return <p className="text-center mt-10">Loading course...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen flex justify-center pt-10 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>

        <p className="text-gray-600 mb-2">Category: {course.category}</p>

        <p className="font-semibold mb-4">
          Price: {course.price === 0 ? "FREE" : `₹${course.price}`}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 hover:underline"
        >
          ← Back to Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
