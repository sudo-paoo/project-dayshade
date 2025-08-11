import Image from "next/image"
import { Button } from "../ui/button"
import { GlassContainer } from "../shared/glass-container"
import {
  Code,
  Palette,
  Smartphone,
  Gamepad2,
  Briefcase,
  Users,
  Brain,
} from "lucide-react"

export default function ProgrammersDenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <GlassContainer className="w-full max-w-8xl rounded-xl p-4 sm:p-8 space-y-8"> 
        {/* Header */}
        <h1 className="text-white text-center text-2xl sm:text-3xl font-bold mb-8">
          Official Programmers&apos; Den Facebook Page
        </h1>

        {/* Facebook Page Section */}
        
            <div className="w-full flex justify-center items-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fccsprogrammersden&tabs&width=500&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="500"
                height="150"
                style={{ border: "none", overflow: "hidden" }}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
      

        {/* Work with us section */}
        <div className="text-center mt-12">
          <h2 className="text-white text-4xl sm:text-5xl font-bold">Work with us!</h2>
          <p className="text-gray-300 text-lg mt-2">All Red Hawks are welcome!</p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Code className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">Competitive Programming Team</h3>
          </GlassContainer>
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Palette className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">Multimedia Team</h3>
          </GlassContainer>
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Smartphone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">Web and App Development Team</h3>
          </GlassContainer>
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Gamepad2 className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">Game Development Team</h3>
          </GlassContainer>
        </div>

        {/* Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Briefcase className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">GET INDUSTRY EXPERIENCE</h3>
            <p className="text-gray-300 text-sm">
              Learn how professionals in the industry work and prepare yourself as Programmers Den operates under
              industry standards.
            </p>
          </GlassContainer>
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Users className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">COLLABORATE WITH SENIOR PROGRAMMERS</h3>
            <p className="text-gray-300 text-sm">
              Get trained by your mentors and learn to manage projects with other skilled members.
            </p>
          </GlassContainer>
          <GlassContainer variant="card" className="rounded-lg p-6 flex flex-col items-center text-center space-y-3">
            <div className="bg-purple-800/50 p-3 rounded-full">
              <Brain className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold">USE AI TECHNOLOGY</h3>
            <p className="text-gray-300 text-sm">
              We see AI as a tool to improve and innovate. Learn how to use modern technologies like AI to become a
              better programmer.
            </p>
          </GlassContainer>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
         <Button className='mt-4 min-w-[200px] px-4 md:px-6 py-6 bg-transparent border-white border-2 rounded-full cursor-pointer text-white font-bold text-xl hover:bg-white hover:text-black'>About us</Button>
          <Button className='mt-4 min-w-[200px] px-4 md:px-16 py-6 bg-gradient-to-r from-[#67FFAF] via-100% to-[#0D4D2C] rounded-full cursor-pointer text-black font-bold text-xl'>Join now</Button>
        </div>
      </GlassContainer>
    </div>
  )
}