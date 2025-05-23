'use client'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";

export default function CTA() {
      const [isOpen, setIsOpen] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      name: "Azah Anyeni",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Roelof Bekkenenks",
      role: "React Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Leonardo Oliveira",
      role: "Illustrator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Izabella Tabakova",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sofia Rodriguez",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getCurrentSlideMembers = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return teamMembers.slice(startIndex, startIndex + itemsPerSlide);
  };
  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      {/* CTA Section */}
       <div className="bg-[#1E1B38] py-10 px-6 rounded-lg text-white flex justify-center " >
      <div className="bg-[#FAEDE9] rounded-lg p-6 w-full max-w-7xl flex flex-col md:flex-row items-center relative py-16 pl-24 ">
        
        {/* Starburst */}
        <div className="absolute -top-14 left-24  text-white px-3 py-1 rounded-full text-sm font-bold">
          <Image
            src="/images/cta_floating_start.png"
            alt="Starburst"
            width={100}
            height={50}
            />

        </div>

        {/* Text + CTA */}
      <div className="flex flex-col justify-center">
              <p className="text-[#ff6b53] uppercase text-sm font-medium tracking-wider mb-2">GET STARTED</p>
              <h2 className="text-3xl font-bold mb-6 text-black" >
                We Help Companies
                <br />
                Move Faster
              </h2>
              <button className="bg-[#ff6b53] text-white px-6 py-3 rounded-md text-sm font-medium w-fit hover:bg-[#e55a44] transition-colors">
                CONTACT US
              </button>
            </div>

        {/* Mock Card + Image */}
        <div className="md:w-2/4 flex items-center justify-center mt-6 md:mt-0 relative sm:block hidden">
          <div className="bg-white shadow-lg p-4 rounded-lg w-64 ml-24">
            <div className="h-4 w-4 bg-yellow-400 rounded-full mb-2"></div>
            <div className="h-2 bg-gray-300 w-2/3 mb-2"></div>
            <div className="h-2 bg-purple-300 w-full mb-2"></div>
            <div className="w-full text-right text-red-400 text-lg">↗</div>
          </div>
          <Image
          width={200}
          height={200}
            src="/images/cta_card_womem.png" // Use actual image path
            alt="woman"
            className="absolute -right-50  -bottom-22.5 z-10  object-cover hidden md:block"
          />
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="bg-white text-black rounded-lg p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows={4}></textarea>
                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Submit
                </button>
              </form>
              <button onClick={() => setIsOpen(false)} className="mt-4 text-sm text-gray-600 underline">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

      {/* Team Section */}
   <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-[#ff6b53] uppercase text-sm font-medium tracking-wider mb-2">OUR TEAM</p>

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            Team of Designers
            <br />
            and Developers
          </h2>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 hover:border-[#ff6b53] transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:text-[#ff6b53] transition-colors"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 hover:border-[#ff6b53] transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:text-[#ff6b53] transition-colors"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {teamMembers
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((member, index) => (
                    <div 
                      key={`${slideIndex}-${index}`}
                      className="bg-[#252543] rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff6b53]/20"
                    >
                      <div className="h-64 overflow-hidden relative group">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#252543]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                        <p className="text-gray-400 text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#ff6b53] scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#ff6b53] transition-all duration-500 ease-in-out"
              style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          {currentIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  )
}
