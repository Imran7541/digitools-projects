import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-violet-600 py-10 px-4">
      <div className="max-w-4xl mx-auto border border-dashed border-cyan-400 p-6">
        <div className="flex flex-col md:flex-row justify-around items-center text-white text-center">
          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">50K+</h2>
            <p className="text-sm md:text-base font-medium opacity-80">
              Active Users
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div className="md:hidden w-16 h-px bg-white/20 my-4"></div>

          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">200+</h2>
            <p className="text-sm md:text-base font-medium opacity-80">
              Premium Tools
            </p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          <div className="md:hidden w-16 h-px bg-white/20 my-4"></div>

          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">4.9</h2>
            <p className="text-sm md:text-base font-medium opacity-80">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
