import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-[#faf0e6]">
      {/* Top logos section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
      
          <div className=" px-2">
            <Image
              src="/company.png"
              alt="Travel Explorer"
             width={5000}
                height={50}
              className="h-auto w-full"
            />
          </div>
     
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with images */}
          <div className="w-full md:w-1/2 relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
             
            </div>

            

            {/* Workspace image */}
            <div className="relative mt-16 ml-1  mb-10">
              <div className="flex justify-center   item-center w-full rounded-lg ">
                <Image src="/about_pic.png" alt="Workspace" width={200} height={200} className="w-[500px] h-auto" />
              </div>
            </div>

            {/* Person image */}
          
          </div>

          {/* Right side with text */}
          <div className="w-full md:w-1/2 pl-0 md:pl-16 mt-20 md:mt-0">
            <div className="text-[#ff6b5b] uppercase tracking-wide mb-4">ABOUT</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3c2a21] mb-6">
              An Experience
              <br />
              Design Agency
            </h1>
            <p className="text-[#6d5d4b] mb-4">Provides a full service range</p>
            <p className="text-[#6d5d4b] mb-8 w-sm">
              Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an
              extension of the merchant's team.
            </p>
            <button className="bg-white text-[#3c2a21] font-medium px-6 py-3 rounded-md hover:bg-[#f5ebe0] transition-colors">
              ABOUT US
            </button>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 border-t border-[#e8d5c4] pt-10">
          <div className="p-6 border border-[#e8d5c4] rounded-lg">
            <h2 className="text-4xl font-bold text-[#3c2a21] mb-2">42%</h2>
            <p className="text-[#6d5d4b]">Years of experience</p>
          </div>
          <div className="p-6 border border-[#e8d5c4] rounded-lg">
            <h2 className="text-4xl font-bold text-[#3c2a21] mb-2">73+</h2>
            <p className="text-[#6d5d4b]">Agency members</p>
          </div>
          <div className="p-6 border border-[#e8d5c4] rounded-lg">
            <h2 className="text-4xl font-bold text-[#3c2a21] mb-2">5.000</h2>
            <p className="text-[#6d5d4b]">Projects complete</p>
          </div>
        </div>
      </div>
    </div>
  )
}
