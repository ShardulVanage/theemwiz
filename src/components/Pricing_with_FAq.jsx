import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fdf5f0] text-[#2a1a12] px-4 py-12 md:px-6 lg:px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Pricing Section */}
        <div className="mb-20">
          <div className="uppercase text-[#f47458] text-sm font-medium mb-4">Pricing</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Check Our
            <br />
            Pricing Plans
          </h1>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/20 rounded-lg p-8 border border-[#f1e6e0] z-10">
              <div className="uppercase text-[#f47458] text-sm font-medium mb-4">Consultation</div>
              <h2 className="text-3xl font-bold mb-3">Free</h2>
              <p className="text-sm text-[#6b5a50] mb-8">
                Your digital marketing efforts, instead of handing in-house.
              </p>

              <div className="space-y-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Brand Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#e9ddd5] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-[#6b5a50]">Market Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#e9ddd5] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-[#6b5a50]">Production</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full uppercase text-xs font-semibold tracking-wide border-[#2a1a12] text-[#2a1a12] hover:bg-[#2a1a12] hover:text-white"
              >
                CONTACT US
              </Button>
            </div>

            {/* $1500 Plan - Popular */}
            <div className="bg-white rounded-lg p-8 border border-[#f1e6e0] shadow-sm relative -mt-4 z-20 mb-4">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#f47458] text-white text-xs font-medium py-1 px-4 rounded-full">
                Popular
              </div>
              <div className="uppercase text-[#f47458] text-sm font-medium mb-4">Design</div>
              <h2 className="text-3xl font-bold mb-3">$1500</h2>
              <p className="text-sm text-[#6b5a50] mb-8 sm:max-w-sm">
                Provide your business with a variety of  digital solutions br to promote.
              </p>

              <div className="space-y-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Brand Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Market Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Production</span>
                </div>
              </div>

              <Button className="w-full uppercase text-xs font-semibold tracking-wide bg-[#f47458] hover:bg-[#e05e42] text-white">
                CONTACT US
              </Button>
            </div>

            {/* $2900 Plan */}
            <div className="bg-white/30 rounded-lg p-8 border border-[#f1e6e0] z-10">
              <div className="uppercase text-[#f47458] text-sm font-medium mb-4">Design+Code</div>
              <h2 className="text-3xl font-bold mb-3">$2900</h2>
              <p className="text-sm text-[#6b5a50] mb-8">Help you hit your marketing goals and grow your business.</p>

              <div className="space-y-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Brand Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Market Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#f47458] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Production</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full uppercase text-xs font-semibold tracking-wide border-[#2a1a12] text-[#2a1a12] hover:bg-[#2a1a12] hover:text-white"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div >
          <div className="uppercase text-[#f47458] text-sm font-medium mb-4">FAQ</div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-sm text-[#6b5a50] mb-4">
                A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling
                in-house.
              </p>
              <Button variant="link" className="text-[#2a1a12] p-0 h-auto font-medium hover:text-[#f47458]">
                Contact Us
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="space-y-0">
                {/* FAQ Item 1 - Open by default */}
                <div className="border-t border-[#e9ddd5]">
                  <div className="py-4 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold sm:text-3xl text-2xl">A digital agency is a business</h3>
                    <div className="w-6 h-6 rounded-full bg-[#f47458] flex items-center justify-center text-white">
                      <Minus size={14} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="bg-white p-4 rounded-lg text-[#6b5a50] sm:text-lg text-base">
                      Digital marketing efforts, instead of handling in-house. They can provide your business with a
                      variety of digital solutions to promote your product or service online and help you hit your
                      marketing goals and grow your business.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="border-t border-[#e9ddd5]">
                  <div className="py-4 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold sm:text-2xl text-xl">Hire to outsource your digital</h3>
                    <div className="w-6 h-6 rounded-full bg-[#f47458] flex items-center justify-center text-white">
                      <Plus size={14} />
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="border-t border-[#e9ddd5]">
                  <div className="py-4 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold sm:text-2xl text-xl">Marketing efforts</h3>
                    <div className="w-6 h-6 rounded-full bg-[#f47458] flex items-center justify-center text-white">
                      <Plus size={14} />
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="border-t border-[#e9ddd5] border-b">
                  <div className="py-4 flex justify-between items-center cursor-pointer">
                    <h3 className="font-bold sm:text-2xl text-xl">Can provide your business</h3>
                    <div className="w-6 h-6 rounded-full bg-[#f47458] flex items-center justify-center text-white">
                      <Plus size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
