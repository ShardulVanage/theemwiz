import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#fdf0e9] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section with "How We Work" */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div>
            <p className="text-[#ff5e3a] uppercase tracking-wide text-sm mb-4">HOW WE WORK</p>
            <h2 className="text-[#3d2517] text-4xl md:text-5xl font-bold mb-6">Making Your Projects Look Awesome</h2>
            <p className="text-[#6d5d53] mb-6">
              Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.
            </p>
            <Link href="#" className="text-[#6d5d53] hover:text-[#3d2517] transition-colors">
              Read More
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-8">
              <span className="text-[#3d2517] text-6xl font-bold">1</span>
              <p className="text-[#3d2517] text-xl font-bold pt-3">Full service range including</p>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-[#3d2517] text-6xl font-bold">2</span>
              <p className="text-[#3d2517] text-xl font-bold pt-3">Technical skills, design, business</p>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-[#3d2517] text-6xl font-bold">3</span>
              <p className="text-[#3d2517] text-xl font-bold pt-3">Themselves in the merchant's</p>
            </div>
          </div>
        </div>

        {/* Bottom section with Video */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/work.png"
              alt="Abstract curved shapes in red and blue"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 hover:bg-white/40 transition-colors">
                <Play className="w-6 h-6 text-white fill-white" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
              1:45
            </div>
          </div>
          <div>
            <p className="text-[#ff5e3a] uppercase tracking-wide text-sm mb-4">VIDEO REEL</p>
            <h2 className="text-[#3d2517] text-4xl md:text-5xl font-bold mb-6">Unlock The Greatest Value Possible</h2>
            <p className="text-[#6d5d53]">
              Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
