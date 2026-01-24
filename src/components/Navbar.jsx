import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="width-full bg-blue-400 text-white px-6 py-3 flex gap-6">
      <Link to="/" className="hover:underline" >
      Home
      </Link>
        <Link to="/courses" className="hover:underline" >
      Courses
      </Link>
    </nav>
  )
}

export default Navbar
