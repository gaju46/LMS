import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        {/* Left */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Lotus E-School</h3>
          <p>Empowering Class 8–10 students with digital learning.</p>
        </div>

        {/* Middle */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/courses" className="hover:text-blue-600">Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
          <p>Email: support@lotuseschool.com</p>
          <p>Phone: +977-9800000000</p>
        </div>
      </div>

      <div className="bg-gray-200 text-center text-xs py-4">
        © {new Date().getFullYear()} Lotus E-School. All rights reserved.
      </div>
    </footer>
  )
}
