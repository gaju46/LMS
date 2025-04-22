import { useState } from "react";
import Header from "@/modules/core/components/Header.jsx";
import Footer from "@/modules/core/components/Footer.jsx";
import { CourseCard } from "@/modules/core/components/CourseCard.jsx";
import { PricingCard } from "@/modules/core/components/PricingCard.jsx";
import { SkillCard } from "@/modules/core/components/SkillCard.jsx";
import { TeacherCard } from "@/modules/core/components/TeacherCard.jsx";
import { TestimonialCard } from "@/modules/core/components/TestimonialCard.jsx";
import { Button } from "@/components/ui/Button.jsx";

import {
  courses,
  pricingPlans,
  skills,
  teachers,
  testimonials,
} from "@/modules/core/static-data/landing-data.jsx";

export default function Landing() {
  const [level, setLevel] = useState("8");
  const levels = ["8", "9", "10"];
  const filtered = courses.filter((c) => c.level === level);

  return (
    <>
      {/* 1. Header stays white with subtle bottom border */}
      <Header className="bg-black border-b" />

      <main className="space-y-32 max-w-7xl mx-auto px-6 py-12">

        {/* 2. Hero */}
        <section className="flex flex-col-reverse md:flex-row items-center bg-lightBlue rounded-2xl overflow-hidden">
          <div className="md:w-1/2 p-12 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              Online Learning<br/>Designed for Courses 8 to 10
            </h1>
            <p className="text-gray-600 text-lg">
              Interactive learning made easy, engaging, and accessible.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                View Course
              </Button>
              <Button className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10">
                Join Free Today
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-200 rounded-2xl h-64 md:h-auto">
            {/* replace with real hero graphic */}
            <img
              src="/hero-placeholder.png"
              alt="Hero"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </section>

        {/* 3. Why Choose */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Why Choose Lotus E School?
          </h2>
          <p className="text-center text-gray-500 mb-8">
            The perfect learning platform for courses 8, 9, and 10
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Curriculum-Based Courses",
                desc: "Tailored for classes 8-10 with up-to-date Nepali curriculum.",
              },
              {
                title: "Qualified Teachers",
                desc: "Learn from experienced, school-based educators.",
              },
              {
                title: "Interactive & Engaging",
                desc: "Quizzes, videos, and live activities to deepen learning.",
              },
              {
                title: "Affordable & Accessible",
                desc: "Premium educational resources at minimal costs.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 text-center hover:shadow-md transition"
              >
                {/* swap in your SVG icon here */}
                <div className="mb-4 text-primary">
                  <svg className="w-8 h-8 mx-auto" /*…*/ />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Courses Offered with Tabs */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Courses Offered
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Explore our curriculum-based courses for classes 8, 9, & 10
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={
                  level === l
                    ? "px-4 py-2 rounded-full bg-primary text-white"
                    : "px-4 py-2 rounded-full bg-white text-gray-600 border border-gray-300"
                }
              >
                Class {l}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, idx) => (
              <CourseCard
                key={idx}
                {...course}
                className="border rounded-2xl p-6 hover:shadow-lg transition h-full flex flex-col justify-between"
              />
            ))}
          </div>
        </section>

        {/* 5. Skills Development */}
        <section className="bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Skills Development
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Build essential skills for academic success and beyond
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((sk, i) => (
              <SkillCard
                key={i}
                {...sk}
                className="border rounded-xl p-4 text-center hover:shadow-md transition"
              />
            ))}
          </div>
          <div className="text-center mt-6">
            <Button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Explore All Skills
            </Button>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="bg-lightBlue rounded-2xl py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Student Success Stories
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Hear from our students who have improved their academic performance
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  {...t}
                  className="bg-white p-6 rounded-2xl shadow"
                />
              ))}
            </div>
            {/* you can overlay arrows here */}
          </div>
        </section>

        {/* 7. Meet Our Teachers */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Meet Our Teachers
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Learn from experienced educators dedicated to your success
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teachers.map((t, i) => (
              <TeacherCard
                key={i}
                {...t}
                className="border rounded-2xl p-6 text-center hover:shadow-md transition"
              />
            ))}
          </div>
        </section>

        {/* 8. Pricing Plans */}
        <section className="bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Affordable Learning Plans
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Choose the plan that’s right for you
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <PricingCard
                key={i}
                {...plan}
                className={
                  plan.popular
                    ? "border-2 border-primary bg-primary/10 rounded-2xl p-6 shadow-lg"
                    : "border rounded-2xl p-6 hover:shadow-md transition"
                }
              />
            ))}
          </div>
        </section>

        {/* 9. Call to Action */}
        <section className="bg-lightBlue rounded-2xl py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Start your journey to success today!
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of students who are already improving their grades.
          </p>
          <Button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Get Started Now
          </Button>
        </section>
      </main>

      <Footer className="bg-white border-t" />
    </>
  );
}
