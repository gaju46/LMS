export const courses = [
  {
    title: "Mathematics",
    description:
      "Learn algebra, geometry, and trigonometry with interactive lessons and practice exercises",
    level: 3,
  },
  {
    title: "Science",
    description:
      "Explore physics, chemistry, and biology with engaging experiments and visual demonstrations",
    level: 2,
  },
  {
    title: "English",
    description:
      "Improve reading, writing, and communication skills with comprehensive lessons",
    level: 3,
  },
  {
    title: "Nepali",
    description:
      "Master Nepali language skills with comprehensive grammar, literature, and writing lessons",
    level: 2,
  },
  {
    title: "Social Studies",
    description:
      "Learn about history, geography, and civics through engaging multimedia lessons",
    level: 2,
  },
  {
    title: "Computer Science",
    description:
      "Build fundamental computer skills and learn programming basics with hands‑on projects",
    level: 3,
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "Rs. 0",
    description: "Free trial for 7 days",
    features: [
      "Access to 3 courses",
      "Basic quizzes and tests",
      "Email support",
      "Mobile app access",
    ],
  },
  {
    name: "Standard",
    price: "Rs. 499",
    description: "Monthly subscription",
    features: [
      "Access to all courses",
      "Advanced quizzes and tests",
      "Priority email support",
      "Mobile app access",
      "Downloadable resources",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Rs. 999",
    description: "Monthly subscription",
    features: [
      "Access to all courses",
      "Advanced quizzes and tests",
      "24/7 support",
      "Mobile app access",
      "Downloadable resources",
      "Progress tracking",
      "1‑on‑1 tutoring sessions",
      "Personalized study plan",
    ],
  },
];

export const skills = [
  {
    title: "Programming",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Technical Writing",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Public Speaking",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.06 19.75 7.74 19.28L3 20L4.5 15.97C3.56 14.9 3 13.5 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Literacy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 17H14.5M9.5 17C8.39543 17 7.5 16.1046 7.5 15V9C7.5 7.89543 8.39543 7 9.5 7H14.5C15.6046 7 16.5 7.89543 16.5 9V15C16.5 16.1046 15.6046 17 14.5 17M9.5 17C8.39543 17 7.5 17.8954 7.5 19C7.5 20.1046 8.39543 21 9.5 21H14.5C15.6046 21 16.5 20.1046 16.5 19C16.5 17.8954 15.6046 17 14.5 17M12 7V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Critical Thinking",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const teachers = [
  {
    name: "Mr. Anish Joshi",
    subject: "Mathematics",
    experience: "10+ years of teaching experience",
    education: "M.Sc. in Mathematics from Tribhuvan University",
  },
  {
    name: "Mrs. Meera Gurung",
    subject: "Science",
    experience: "8+ years of teaching experience",
    education: "M.Sc. in Physics from Kathmandu University",
  },
  {
    name: "Mr. Bikash Rai",
    subject: "English",
    experience: "12+ years of teaching experience",
    education: "M.A. in English Literature from Tribhuvan University",
  },
  {
    name: "Mrs. Sunita Sharma",
    subject: "Social Studies",
    experience: "9+ years of teaching experience",
    education: "M.A. in History from Tribhuvan University",
  },
];

export const testimonials = [
  {
    content:
      "“Lotus E School helped me improve my grades significantly. The interactive lessons and practice tests made learning enjoyable and effective.”",
    name: "Rajan Sharma",
    role: "Grade 10 Student",
    rating: 5,
  },
  {
    content:
      "“The teachers are excellent and the course materials are comprehensive. I feel much more confident about my upcoming exams thanks to Lotus E School.”",
    name: "Priya Patel",
    role: "Grade 9 Student",
    rating: 5,
  },
];
