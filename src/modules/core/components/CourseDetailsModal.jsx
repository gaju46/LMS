"use client"
import { X, Clock, BookOpen, Award, Play } from "lucide-react"

const CourseDetailsModal = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{course.name}</h2>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <img
                  src={course.tutor.avatar || "/placeholder.svg"}
                  alt={course.tutor.name}
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium text-gray-700">{course.tutor.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock size={20} className="mr-2 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium text-gray-700">{course.duration}</p>
                </div>
              </div>

              <div className="flex items-center">
                <BookOpen size={20} className="mr-2 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-medium text-gray-700">{course.skillLevel}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Course Description</h3>
              <p className="text-gray-600">{course.fullDescription || course.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Syllabus Overview</h3>
              <ul className="space-y-3">
                {course.syllabus.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{topic.title}</p>
                      {topic.description && <p className="text-sm text-gray-500 mt-1">{topic.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Learning Outcomes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <Award size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {course.sampleVideo && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sample Lesson</h3>
                <div className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Play size={32} fill="white" />
                    </button>
                  </div>
                  <img
                    src={course.sampleVideo.thumbnail || "/placeholder.svg"}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover rounded-lg opacity-50"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">{course.sampleVideo.title}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 bg-primary rounded-md text-white font-medium hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
              <button className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Contact Tutor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsModal
