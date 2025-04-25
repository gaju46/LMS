// "use client";

// import { useEffect, useState } from "react";
// import Header from "../../src/modules/core/components/Header.jsx";
// import Footer from "../../src/modules/core/components/Footer.jsx";
// import ClassLevelSelector from "../../src/modules/core/components/ClassLevelSelector.jsx";
// import CourseGrid from "../../src/modules/core/components/CourseGrid.jsx";
// import CourseDetailsModal from "../../src/modules/core/components/CourseDetailsModal.jsx";
// // import SearchAndFilter from "../../src/modules/core/components/SearchAndFilter.jsx";
// // import SubscriptionSection from "../../src/modules/core/components/SubscriptionSection.jsx";
// // import { getCourses } from "../../src/modules/core/components/courseService";
// import { motion as Motion } from "framer-motion";


// import SearchAndFilter from "../components/SearchAndFilter";
// import SubscriptionSection from "../components/SubscriptionSection";


// export default function CoursePage() {
//   const [selectedClass, setSelectedClass] = useState("Class 8");
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({ subject: "", tutor: "", duration: "" });
//   // const [coursesData, setCoursesData] = useState({});
//   const [bookmarked, setBookmarked] = useState(() => {
//     const stored = localStorage.getItem("bookmarkedCourses");
//     return stored ? JSON.parse(stored) : [];
//   });

//   // useEffect(() => {
//   //   const fetchCourses = async () => {
//   //     const response = await getCourses();
//   //     setCoursesData(response);
//   //   };
//   //   fetchCourses();
//   // }, []);

//   useEffect(() => {
//     localStorage.setItem("bookmarkedCourses", JSON.stringify(bookmarked));
//   }, [bookmarked]);

//   // const handleClassChange = (classLevel) => setSelectedClass(classLevel);
//   // const handleViewDetails = (course) => {
//   //   setSelectedCourse(course);
//   //   setIsModalOpen(true);
//   // };
//   // const closeModal = () => setIsModalOpen(false);
//   // // const handleSearchChange = (term) => setSearchTerm(term);
//   // const handleFilterChange = (filterType, value) => {
//   //   setFilters({ ...filters, [filterType]: value });
//   // };

//   // const toggleBookmark = (courseId) => {
//   //   setBookmarked((prev) =>
//   //     prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
//   //   );
//   // };

//   // const filteredCourses = (coursesData[selectedClass] || []).filter((course) => {
//   //   if (
//   //     searchTerm &&
//   //     !course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//   //     !course.description.toLowerCase().includes(searchTerm.toLowerCase())
//   //   ) return false;
//   //   if (filters.subject && course.name !== filters.subject) return false;
//   //   if (filters.tutor && course.tutor.name !== filters.tutor) return false;
//   //   if (filters.duration && course.duration !== filters.duration) return false;
//   //   return true;
//   // });

//   return (
//     <Motion.div className="min-h-screen bg-gray-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <Header />

//       <Motion.div className="bg-lightBlue py-12" initial={{ y: -20 }} animate={{ y: 0 }}>
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Discover Your Learning Path
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Explore our comprehensive courses designed to help students excel in their academic journey
//           </p>
//           <button className="px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-blue-700 transition-colors">
//             Start Learning Today
//           </button>
//         </div>
//       </Motion.div>

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore Our Courses</h1>

//         <ClassLevelSelector selectedClass={selectedClass} onClassChange={handleClassChange} />

//         {/* <SearchAndFilter
//           onSearchChange={handleSearchChange}
//           onFilterChange={handleFilterChange}
//           filters={filters}
//           courses={coursesData[selectedClass] || []}
//         />

//         <CourseGrid
//           courses={filteredCourses}
//           onViewDetails={handleViewDetails}
//           onToggleBookmark={toggleBookmark}
//           bookmarked={bookmarked}
//         /> */}

//         {isModalOpen && selectedCourse && (
//           <CourseDetailsModal course={selectedCourse} onClose={closeModal} />
//         )}
//       </main>

//       <SubscriptionSection />

//       <Footer />
//     </Motion.div>
//   ); // ← End return
// } // ← End function
