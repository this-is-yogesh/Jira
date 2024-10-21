"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthProp {
  children: React.ReactNode;
}

const Layout = ({ children }: AuthProp) => {
  let pathname = usePathname();
  let isSignUp = pathname === "/sign-up"; 
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl  p-4">
        <nav className=" flex justify-between items-center">
          <Image src="/logo.svg" width={56} height={56} alt="logo" />
          <Button asChild variant={"secondary"}>
            <Link href={isSignUp ? "/sign-in" : "/sign-up"}>
              {isSignUp ? "Login" : "Sign Up"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
