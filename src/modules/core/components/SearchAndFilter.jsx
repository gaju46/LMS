"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react"

const SearchAndFilter = ({ onSearchChange, onFilterChange, filters, courses }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchInput = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  // Extract unique values for filter options
  const getUniqueSubjects = () => {
    return ["All Subjects", ...new Set(courses.map((course) => course.name))]
  }

  const getUniqueTutors = () => {
    return ["All Tutors", ...new Set(courses.map((course) => course.tutor.name))]
  }

  const getUniqueDurations = () => {
    return ["All Durations", ...new Set(courses.map((course) => course.duration))]
  }

  const handleFilterSelect = (type, value) => {
    onFilterChange(type, value === `All ${type.charAt(0).toUpperCase() + type.slice(1)}s` ? "" : value)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchInput}
          />
        </div>

        <button
          className="flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
          onClick={toggleFilter}
        >
          <Filter size={18} className="mr-2" />
          Filters
          {isFilterOpen ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
        </button>
      </div>

      {isFilterOpen && (
        <div className="bg-white p-4 rounded-md border border-gray-300 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.subject ? filters.subject : "All Subjects"}
              onChange={(e) => handleFilterSelect("subject", e.target.value)}
            >
              {getUniqueSubjects().map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tutor</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.tutor ? filters.tutor : "All Tutors"}
              onChange={(e) => handleFilterSelect("tutor", e.target.value)}
            >
              {getUniqueTutors().map((tutor) => (
                <option key={tutor} value={tutor}>
                  {tutor}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.duration ? filters.duration : "All Durations"}
              onChange={(e) => handleFilterSelect("duration", e.target.value)}
            >
              {getUniqueDurations().map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchAndFilter
