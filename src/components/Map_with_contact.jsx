"use client"


import { useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MapSection() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ email, subject, message })
  }

  return (
    <section className="relative w-full min-h-[800px] overflow-hidden ">
      {/* Map Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center  z-0"
        style={{ backgroundImage: "url('/map.png')" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-56 flex flex-col md:flex-row items-center justify-between ">
        {/* Contact Form */}
        <div className="w-full md:w-[450px] bg-white p-8 rounded-md shadow-lg mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#3c2a10] mb-6">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200"
                required
              />
            </div>

            <div>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="w-full border border-gray-200">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[120px] border border-gray-200"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#ee6e62] hover:bg-[#e05a4e] text-white font-medium py-2 px-4 rounded transition-colors"
            >
              SUBMIT NOW
            </Button>
          </form>
        </div>

        {/* Map Pin */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#ee6e62] flex items-center justify-center shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
