import React from "react";

const ReadyToTransform = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-purple-600 py-14 px-6 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg text-white/90 mb-6">
          Join thousands of professionals who are already using DigiTools to
          work smarter.
        </p>
        
        <p className="text-white/90 mb-8">Start your free trial today.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-violet-700 hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-full text-base transition-all shadow-md">
            Explore Products
          </button>

          <button className="border-2 border-white/90 hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full text-base transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-white/70 text-sm mt-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadyToTransform;
