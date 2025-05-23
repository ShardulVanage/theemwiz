import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#fdf3ef] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo/Agency Section */}
          <div className="flex items-start">
            <div className="flex items-center gap-2">
              {/* <Image src="/images/logo.png" alt="Agency Logo" width={30} height={30} /> */}
              <span className="text-[#3c2a10] font-bold text-3xl">Agency</span>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-[#ee6e62] uppercase text-sm font-medium mb-12">Menu</h3>
            <ul className="space-y-6">
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Section */}
          <div>
            <h3 className="text-[#ee6e62] uppercase text-sm font-medium mb-12">Service</h3>
            <ul className="space-y-6">
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3c2a10] hover:text-[#ee6e62] transition-colors">
                  See More
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-start md:justify-end">
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#ee6e62] flex items-center justify-center text-white hover:bg-[#d55a4e] transition-colors"
              >
                <Facebook size={22} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#ee6e62] flex items-center justify-center text-white hover:bg-[#d55a4e] transition-colors"
              >
                <Twitter size={22} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-[#ee6e62] flex items-center justify-center text-white hover:bg-[#d55a4e] transition-colors"
              >
                <Instagram size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5d6cf] my-4"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#3c2a10]">
          <div>
            <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#ee6e62] transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-[#ee6e62] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
