import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#12161D]  shadow-sm shadow-[#5694FE] border-b border-[#5694FE] border-dashed p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold pl-[5vw]">KwaniX Flow</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#111C30] border border-[#5694FE] text-white rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5694FE]"
            />
          </div>
          <button className="bg-[#5694FE] text-white p-2 rounded-xl hover:bg-[#4A7FE5] transition duration-300">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;