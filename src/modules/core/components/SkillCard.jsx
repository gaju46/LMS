export function SkillCard({ icon, title }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
      <div className="w-6 h-6 mb-3 text-blue-600">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  )
}

