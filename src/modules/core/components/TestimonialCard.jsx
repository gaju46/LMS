import { Star } from "lucide-react"

export function TestimonialCard({ content, name, role, rating }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex text-amber-400 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-4">{content}</p>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}
