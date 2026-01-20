const CourseList = ({ courses }) => {
  if (courses.length === 0) {
    return <p>No courses found</p>;
  }

  return (
    <div className="mt-4 border rounded-2xl px-2 py-2">
      {courses.map((course) => (
        <div key={course.id} className="mb-2 flex gap-2 items-center">
          <span>{course.title}</span>

          {course.price === 0 ? (
            <span className="text-xs px-2 py-0.5 bg-green-200 text-green-800 rounded">
              FREE
            </span>
          ) : (
            <span className="text-xs px-2 py-0.5 bg-blue-200 text-blue-800 rounded">
              PAID
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseList;
