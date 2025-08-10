import React from "react";
import { JoinForm } from "@/components/join-ui/JoinForm";
import GradientBackground from "@/components/shared/GradientBackground";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlassContainer } from "@/components/shared/glass-container";
import { SquareUser } from "lucide-react";

const page = () => {
  return (
    <GradientBackground>
      <section className="w-full max-w-7xl mx-auto grid md:grid-cols-2 h-screen gap-5">
        <div className="grid md:grid-rows-2 gap-5">
          <GlassContainer className="">d</GlassContainer>
          <GlassContainer className="">d</GlassContainer>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <span>
                  <SquareUser />
                </span>
                Join the Den
              </CardTitle>
              <CardDescription>
                Fill out the form to become a member
              </CardDescription>
            </CardHeader>
            <CardContent>
              <JoinForm />
            </CardContent>
            <CardFooter className="text-xs">
              By submitting through the form, you agree to the following. In compliance with Data Privacy Act 0f 2012, it's implementing rules and regulations, and other issuance of the National Privacy Commission, you authorize the organization(Programmers' Den) to collect your data for accomplishing the said activity
            </CardFooter>
          </Card>
        </div>
      </section>
    </GradientBackground>
  );
};

export default page;
