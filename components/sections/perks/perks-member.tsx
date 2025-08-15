import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function PerksMember() {
  return (
    <section className="relative w-full py-12 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-pd-purple opacity-70" />

      <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center justify-center space-y-8 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl text-white">BECOME A MEMBER TODAY</h2>

        <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className={"mt-4 w-full sm:w-auto flex-1 min-w-0 px-6 py-5 bg-transparent border-white border-2 rounded-full cursor-pointer text-white font-bold text-xl hover:bg-white hover:text-black text-center"}>
            About us
          </Button>
          <Button className={"mt-4 w-full sm:w-auto flex-1 min-w-0 px-6 py-5 bg-gradient-to-r from-[var(--color-pd-green)] to-[#0D4D2C] rounded-full cursor-pointer text-black font-bold text-xl flex items-center justify-center gap-2"}>
            Sign Up <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PerksMember