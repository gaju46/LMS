import { BookOpen } from "lucide-react"
import { Button } from "../../../components/ui/Button.jsx"

export function CourseCard({ title, description, level }) {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 mr-2" />
        <div className="flex space-x-1">
          {Array.from({ length: level }).map((_, i) => (
            <span key={i} className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
          ))}
        </div>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Course</Button>
    </div>
  )
}
