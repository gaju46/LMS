import { Button } from "@/components/ui/button";

export function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}) {
  return (
    <div
      className={`bg-white p-6 rounded-lg border ${
        popular ? "border-blue-600" : "border-gray-200"
      } shadow-sm`}
    >
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-2xl font-bold">{price}</span>
        <span className="text-gray-500 text-sm ml-2">{description}</span>
      </div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm">
            <svg
              className="w-4 h-4 text-blue-600 mr-2 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          popular
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-900 hover:bg-gray-800"
        }`}
      >
        Get Started
      </Button>
    </div>
  );
}
