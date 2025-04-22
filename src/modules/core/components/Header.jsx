import { Link } from "react-router-dom"
import { Button } from "../../../components/ui/Button.jsx"

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Lotus E-School
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/skills" className="hover:text-blue-600">
            Skills
          </Link>
          <Link to="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <Link to="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="flex gap-2">
          <Link to="/login">
            <Button size="sm" variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
