import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function PerksMember() {
  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="absolute inset-0 bg-pd-purple opacity-70"></div>
      <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center justify-center space-y-8 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl text-white">BECOME A MEMBER TODAY</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/about" className='mt-4 min-w-[200px] flex justify-center items-center px-4 md:px-6 py-2 h-full bg-transparent border-white border-2 rounded-full font-bold text-xl hover:bg-white hover:text-pd-purple transition-colors duration-300'>About us</Link>
          <Link href="/join" className='mt-4 min-w-[200px] flex justify-center items-center px-4 md:px-16 py-2 bg-primary rounded-full text-black font-bold text-xl hover:bg-gradient-to-l hover:from-[rgb(18,198,176)] hover:to-[rgb(90,227,153)] transition-colors duration-300'>
              Sign Up <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PerksMember