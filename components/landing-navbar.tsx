"use client";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="logo" src="/logo.webp" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          IntelliFlow
          </h1>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full bg-slate-50 text-black">
            Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
