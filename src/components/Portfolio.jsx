'use client'
import React, { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const projects = [
    {
      id: 1,
      title: "SOFA",
      category: "Design",
      image: "/sofa.png",
      gridClass: "md:col-span-1 md:row-span-2"
    },
    {
      id: 2,
      title: "KeyBoard",
      category: "Branding",
      image: "/keyboead.png",
      gridClass: "md:col-span-2 md:row-span-1"
    },
    {
      id: 3,
      title: "Work Media",
      category: "Illustration",
      image: "/workmedia.png",
      gridClass: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "DDDone",
      category: "Motion",
      image: "/dddone.png",
      gridClass: "md:col-span-1 md:row-span-1"
    }
  ];

  const filters = [
    { name: 'Show All', count: 4 },
    { name: 'Design', count: 1 },
    { name: 'Branding', count: 1 },
    { name: 'Illustration', count: 1 },
    { name: 'Motion', count: 1 }
  ];

  const filteredProjects = activeFilter === 'Show All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-rose-400 mb-2">PORTFOLIO</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Latest Work</h1>

          <div className="flex justify-center gap-6 text-sm flex-wrap">
            {filters.map((filter) => (
              <button 
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`relative transition-all duration-300 ${
                  activeFilter === filter.name 
                    ? 'opacity-100 text-rose-400' 
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {filter.name}
                <span className="absolute -top-1 -right-2 text-xs bg-rose-400 text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout - Top Row: Square + Rectangle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* SOFA - Square (1x1) */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-sm bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ 
                backgroundImage: `url(${projects[0].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-start">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                  {projects[0].category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {projects[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* KeyBoard - Rectangle (3x1) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-sm bg-gradient-to-br from-gray-800 to-gray-900  sm:aspect-[2] aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ 
                backgroundImage: `url(${projects[1].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-start">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                  {projects[1].category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {projects[1].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Rectangle + Square */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Work Media - Rectangle (3x1) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-sm bg-gradient-to-br from-gray-800 to-gray-900  sm:aspect-[2] aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ 
                backgroundImage: `url(${projects[2].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-start">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                  {projects[2].category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {projects[2].title}
                </h3>
              </div>
            </div>
          </div>

          {/* DDDone - Square (1x1) */}
          <div className="md:col-span-1 relative group overflow-hidden rounded-sm bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ 
                backgroundImage: `url(${projects[3].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="flex justify-start">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                  {projects[3].category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {projects[3].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-gray-800 border border-gray-600 text-white text-sm px-6 py-2 rounded hover:bg-gray-700 transition-colors font-medium">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
}