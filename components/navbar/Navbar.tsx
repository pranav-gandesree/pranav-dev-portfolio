
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import avatar from '../../public/avatar.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-[83%] left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-opacity-80 shadow-md">
      <div className="flex justify-between items-center p-4 ">
        {/* Avatar/Icon on the left */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={avatar}
              alt="Pranav Gandesree"
              width={50}
              height={50}
              className="cursor-pointer rounded-full"
            />
          </Link>
        </div>

        {/* Navigation Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem className="text-lg">
                <NavigationMenuLink asChild>
                  <Link href="/" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg">
                <NavigationMenuLink asChild>
                  <Link href="/projects" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg">
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Menu Bar icon for mobile screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none focus:bg-slate-500 p-2 rounded-md transition duration-300"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2D3748] backdrop-filter backdrop-blur-lg text-white shadow-md rounded-b-2xl">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-2 items-center py-4">
              <NavigationMenuItem className="text-lg w-full">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="block hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300 text-center">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg w-full">
                <NavigationMenuLink asChild>
                  <Link href="/projects" className="block hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300 text-center">
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg w-full">
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="block hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300 text-center">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}