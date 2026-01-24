import React, { useEffect, useState } from "react";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory = category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === "az") return a.title.localeCompare(b.title);
    if (sortOrder === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const formattedCourses = data.products.slice(0, 5).map((item) => ({
          id: item.id,
          title: item.title,
          category: item.category,
          price: item.price,
        }));

        setCourses(formattedCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

 return (
    <div className="min-h-screen flex justify-center pt-10 bg-gray-600 ">
      <div className="border px-6 py-6 mb-8 rounded-lg bg-white shadow w-full max-w-xl">
        <div className=" flex flex-col  items-center gap-4 pt-10 ">
          <SearchBar search={search} setSearch={setSearch} />
          <button
            onClick={() => setSearch("")}
            className="mt-4 px-2 py-1 border rounded cursor-pointer"
          >
            Reset
          </button>

          <select
            className="border px-2 py-1 rounded cursor-pointer"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Programming">Programming</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-2 py-1 cursor-pointer  "
          >
            <option value="none">No Sorting</option>
            <option value="az">Title A to Z</option>
            <option value="za">Title Z to A</option>
          </select>

          <p className="text-sm text-grey-600">
            Showing {filteredCourses.length} courses
          </p>

          {loading && <p>Loading courses...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <CourseList courses={sortedCourses} title="Available Courses" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
