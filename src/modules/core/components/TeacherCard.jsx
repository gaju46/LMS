import { Button } from "../../../components/ui/Button"

export function TeacherCard({ name, subject, experience, education }) {
  return (
    <div className="text-center bg-white p-4 border rounded-lg shadow-sm">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
      <h3 className="font-bold text-sm">{name}</h3>
      <p className="text-gray-600 text-xs mb-1">{subject}</p>
      <p className="text-gray-500 text-xs">{experience}</p>
      <p className="text-gray-500 text-xs mb-3">{education}</p>
      <Button variant="outline" size="sm" className="text-xs">
        View Profile
      </Button>
    </div>
  )
}
