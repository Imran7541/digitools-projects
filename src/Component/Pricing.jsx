import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-xl p-6 flex flex-col transition-all duration-300 ${
              plan.isPopular
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-50 text-gray-900 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            }`}
          >
           <div className="relative">
                        {plan.isPopular && (
              <p className="bg-orange-400 text-white text-xs font-bold w-fit px-2 py-0.5 rounded-full uppercase absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center ">
                Most Popular
              </p>
            )}
           </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p
                className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}
              >
                {plan.subtitle}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-sm">/Month</span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <span
                    className={`mr-2 ${plan.isPopular ? "text-white" : "text-green-500"}`}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                className={`w-full py-2 rounded-full font-semibold border transition-colors ${
                  plan.isPopular
                    ? "bg-white text-purple-500 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
