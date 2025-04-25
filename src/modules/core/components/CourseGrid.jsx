import CourseCard from "./CourseCard"

const CourseGrid = ({ courses, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.length > 0 ? (
        courses.map((course) => <CourseCard key={course.id} course={course} onViewDetails={onViewDetails} />)
      ) : (
        <div className="col-span-3 text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No courses found matching your criteria</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}

export default CourseGrid
