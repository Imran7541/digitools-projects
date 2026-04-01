import React from 'react';

const StatsSection = () => {
  return (
    /* bg-violet-600 বা bg-purple-600 ব্যবহার করতে পারেন যা আপনার ইমেজের সাথে মিলবে */
    <div className="bg-violet-600 py-10 px-4">
      {/* Dashed Border Container */}
      <div className="max-w-4xl mx-auto border border-dashed border-cyan-400 p-6">
        
        <div className="flex flex-col md:flex-row justify-around items-center text-white text-center">
          
          {/* Active Users */}
          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">50K+</h2>
            <p className="text-sm md:text-base font-medium opacity-80">Active Users</p>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          
          {/* Horizontal Divider for Mobile */}
          <div className="md:hidden w-16 h-px bg-white/20 my-4"></div>

          {/* Premium Tools */}
          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">200+</h2>
            <p className="text-sm md:text-base font-medium opacity-80">Premium Tools</p>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          
          {/* Horizontal Divider for Mobile */}
          <div className="md:hidden w-16 h-px bg-white/20 my-4"></div>

          {/* Rating */}
          <div className="flex-1 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">4.9</h2>
            <p className="text-sm md:text-base font-medium opacity-80">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;