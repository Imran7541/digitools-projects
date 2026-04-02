import React from "react";
import userImage from "../assets/user.png"
import packageImage from "../assets/package.png"
import rocketImage from "../assets/rocket.png"

const GetStarted = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-600 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-15 hover:shadow-xl transition-all relative">
            <div className="absolute top-4 right-8 w-8 h-8 bg-violet-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
              01
            </div>

            <div className="w-20 h-20 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
              <img src={userImage} alt="" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Create Account
            </h3>
            <p className="text-gray-600 text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all relative">
            <div className="absolute top-4 right-8 w-8 h-8 bg-violet-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
              02
            </div>

            <div className="w-20 h-20 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
              <img src={packageImage} />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Choose Products
            </h3>
            <p className="text-gray-600 text-center">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all relative">
            <div className="absolute top-4 right-8 w-8 h-8 bg-violet-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
              03
            </div>

            <div className="w-20 h-20 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
              <img src={rocketImage} />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Start Creating
            </h3>
            <p className="text-gray-600 text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
