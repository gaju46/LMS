import { Check } from "lucide-react"

const SubscriptionSection = () => {
  const subscriptionPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Access to limited course content",
      features: [
        "Access to 5 free courses",
        "Basic learning materials",
        "Community forum access",
        "Mobile app access",
        "24/7 support",
      ],
      recommended: false,
      buttonText: "Start Free",
      buttonClass: "bg-white text-primary border border-primary hover:bg-blue-50",
    },
    {
      name: "Standard",
      price: "$15",
      period: "per month",
      description: "Most popular choice for students",
      features: [
        "Access to all courses",
        "Downloadable resources",
        "Live Q&A sessions",
        "Assignment feedback",
        "Progress tracking",
        "Completion certificates",
      ],
      recommended: true,
      buttonText: "Enroll Now",
      buttonClass: "bg-primary text-white hover:bg-blue-700",
    },
    {
      name: "Premium",
      price: "$29",
      period: "per month",
      description: "Complete learning experience",
      features: [
        "Everything in Standard",
        "1-on-1 tutoring sessions",
        "Priority support",
        "Advanced projects",
        "Career guidance",
        "Internship opportunities",
      ],
      recommended: false,
      buttonText: "Go Premium",
      buttonClass: "bg-white text-primary border border-primary hover:bg-blue-50",
    },
  ]

  return (
    <section className="py-16 bg-lightBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect enrollment plan that suits your learning needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 ${
                plan.recommended ? "border-2 border-primary bg-white relative" : "bg-white border border-gray-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Need a custom plan for your school or organization?</p>
          <button className="inline-flex items-center text-primary font-medium hover:underline">
            Contact us for special group rates
          </button>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
