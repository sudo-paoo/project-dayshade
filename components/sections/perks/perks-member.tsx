import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function PerksMember() {
  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="absolute inset-0 bg-pd-purple opacity-70"></div>
      <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center justify-center space-y-8 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl text-white">BECOME A MEMBER TODAY</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className='mt-4 min-w-[200px] px-4 md:px-6 py-6 bg-transparent border-white border-2 rounded-full cursor-pointer text-white font-bold text-xl hover:bg-white hover:text-black'>About us</Button>
          <Button className='mt-4 min-w-[200px] px-4 md:px-16 py-6 bg-gradient-to-r from-[#67FFAF] via-100% to-[#0D4D2C] rounded-full cursor-pointer text-black font-bold text-xl'>
              Sign Up <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PerksMember