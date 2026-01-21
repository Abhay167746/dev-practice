const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="border px-4 py-2 rounded-lg w-full"
      type="text"
      placeholder="Enter the course"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
