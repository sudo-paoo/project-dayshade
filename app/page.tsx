import { Separator } from "@/components/ui/separator";
import { GlassContainer } from "@/components/shared/glass-container";
import Image from "next/image";
import Button from "@/components/button";
import { RippleButton } from "@/components/magicui/ripple-button";

export default function Page() {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white container mx-auto px-4 py-4 bg-[url('/assets/circles.png')] bg-cover">
        {/* Mobile View  of Home*/}
        {/* Opening Div*/}
        <GlassContainer className="md:hidden flex flex-col m-3 p-4 items-center justify-between">
          <div className=" flex items-center justify-center p-4">
            <Image
              src="/assets/pd-logo.png"
              alt="pd-logo.png"
              width={160}
              height={160}
            ></Image>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/assets/pd-banner.png"
              alt="pd-banner.png"
              width={400}
              height={200}
            ></Image>
          </div>
          <div>
            <p className="text-xs font-bold">where great minds compile.</p>
          </div>
        </GlassContainer>
      </div>
    </>
  );
}
