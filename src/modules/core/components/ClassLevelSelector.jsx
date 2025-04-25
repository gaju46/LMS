"use client"

const ClassLevelSelector = ({ selectedClass, onClassChange }) => {
  const classLevels = ["Class 8", "Class 9", "Class 10"]

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {classLevels.map((classLevel) => (
          <button
            key={classLevel}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
              selectedClass === classLevel
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-300 hover:border-primary hover:text-primary"
            }`}
            onClick={() => onClassChange(classLevel)}
          >
            {classLevel}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ClassLevelSelector
