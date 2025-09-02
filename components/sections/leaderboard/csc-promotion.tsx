import { GlassContainer } from "@/components/shared/glass-container";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CSCPromotion = () => {
  return (
    <GlassContainer className="rounded-none">
      <div className="my-5 md:my-10 lg:mb-20 lg:mt-12 flex justify-center flex-col items-center">
        <p className="text-base md:text-lg mb-3">
          For updates, follow the official CCS Student Council Page!
        </p>
        <GlassContainer className="p-3 md:p-5 flex justify-center md:mx-10 lg:mx-0 rounded-lg lb-content-width">
          <div className="flex justify-center">
            <div className="flex justify-center flex-wrap md:flex-nowrap lg:space-y-0 py-1 lg:py-0 gap-5 md:gap-10 lg:my-2 lg:mx-3">
              <Image
                src="https://graph.facebook.com/TSUCCSSC/picture?width=450&height=450"
                alt="Facebook Profile"
                width={350}
                height={350}
                quality={100}
                className="rounded-full"
              />
              <div className="w-full my-3 md:my-auto">
                <div className="space-y-5 mb-8">
                  <p className="max-w-96 text-base md:text-lg">
                    Official FB page for the 
TSU College of Computer Studies Student Council
                    located at the San Isidro Extension Campus of TSU!
                  </p>
                  <h1 className="text-lg">#RedHawks 🦅</h1>
                  <hr />
                </div>
                <div className="flex justify-center">
                  <Link
                    href="https://www.facebook.com/TSUCCSSC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="outline"
                      className="bg-red-700/60 hover:bg-background hover:text-foreground flex items-center gap-2"
                      size="sm"
                    >
                      Visit Official Page
                      <ExternalLink size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </GlassContainer>
  );
};

export default CSCPromotion;
