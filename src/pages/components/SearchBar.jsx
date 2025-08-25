import React from 'react'
import { MapPin, Ruler, Users, Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="bg-white rounded-full w-[810px] ml-6 shadow-md flex flex-col md:flex-row items-center gap-4 md:gap-0 p-4 mt-6">
          <div className="flex items-center gap-3 flex-1 border-b md:border-b-0 md:border-r md:pr-4 pb-2 md:pb-0">
            <MapPin className="text-red-400" />
            <div>
              <p className="text-gray-800 font-semibold text-sm">Location</p>
              <span className="text-gray-400 text-xs">
                Where are you going?
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-1 border-b md:border-b-0 md:border-r md:px-4 pb-2 md:pb-0">
            <Ruler className="text-red-400" />
            <div>
              <p className="text-gray-800 font-semibold text-sm">Distance</p>
              <span className="text-gray-400 text-xs">Distance k/m</span>
            </div>
          </div>

          
          <div className="flex items-center gap-3 flex-1 md:px-4">
            <Users className="text-red-400" />
            <div>
              <p className="text-gray-800 font-semibold text-sm">Max People</p>
              <span className="text-gray-400 text-xs">0</span>
            </div>
          </div>

          
          <button className="bg-orange-400 rounded-tl-lg rounded-br-lg text-white p-3 shadow-md hover:bg-orange-500 transition">
            <Search size={18} />
          </button>
        </div>
  )
}

export default SearchBar