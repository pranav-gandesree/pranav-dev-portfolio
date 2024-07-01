
"use client";

import * as React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import ModeToggle to ensure it only renders on the client side
const ModeToggle = dynamic(() => import("../modetoggle/ModeToggle"), { ssr: false });

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);

  // Ensure this code runs only on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-transparent backdrop-filter backdrop-blur-lg text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold px-10">
            <Link href="/">Pranav Gandesree</Link>
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem className="hover:text-gray-300">
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:text-gray-300">
                <NavigationMenuLink asChild>
                  <Link href="/projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hover:text-gray-300">
                <NavigationMenuLink asChild>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}




