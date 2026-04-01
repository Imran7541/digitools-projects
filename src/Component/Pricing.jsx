import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Starter</h3>
          <p className="text-gray-500 text-sm mb-6">
            Perfect for getting started
          </p>

          <div className="mb-8">
            <span className="text-5xl font-bold">$0</span>
            <span className="text-gray-500">/Month</span>
          </div>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Basic templates
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Community support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>1 project per month
            </li>
          </ul>

          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 rounded-2xl transition">
            Get Started Free
          </button>
        </div>

        {/* Pro Card (Most Popular) */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-3xl p-8 relative scale-105 shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-6 py-1 rounded-full">
            Most Popular
          </div>

          <h3 className="text-xl font-semibold mb-1">Pro</h3>
          <p className="text-violet-200 text-sm mb-6">Best for professionals</p>

          <div className="mb-8">
            <span className="text-5xl font-bold">$29</span>
            <span className="text-violet-200">/Month</span>
          </div>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Access to all premium tools
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Unlimited templates
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Priority support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Unlimited projects
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Cloud sync
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white">✓</span>
              Advanced analytics
            </li>
          </ul>

          <button className="w-full bg-white text-violet-600 hover:bg-gray-100 font-medium py-4 rounded-2xl transition">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Enterprise
          </h3>
          <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>

          <div className="mb-8">
            <span className="text-5xl font-bold">$99</span>
            <span className="text-gray-500">/Month</span>
          </div>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Everything in Pro
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Team collaboration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Custom integrations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Dedicated support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              SLA guarantee
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              Custom branding
            </li>
          </ul>

          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 rounded-2xl transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
