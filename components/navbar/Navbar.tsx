

// import Image from 'next/image';
// import Link from 'next/link';
// import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
// import avatar from '../../public/avatar.jpg';

// export default function Navbar() {
//   return (
//     <div className="bg-[#2D3748] backdrop-filter backdrop-blur-lg text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center space-x-4 ml-20">
//           <Link href="/">
//             <Image
//               src={avatar}
//               alt="Pranav Gandesree"
//               width={50}
//               height={50}
//               className="cursor-pointer rounded-full"
//             />
//           </Link>
//         </div>

//         <div className="flex items-center space-x-8">
//           <NavigationMenu>
//             <NavigationMenuList className="flex space-x-2">
//               <NavigationMenuItem className="text-lg">
//                 <NavigationMenuLink asChild>
//                   <Link href="/about" className="hover:bg-slate-500 hover:text-white px-3 py-2  rounded-xl transition-colors duration-300">
//                     About
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-lg">
//                 <NavigationMenuLink asChild>
//                   <Link href="/projects" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
//                     Projects
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-lg">
//                 <NavigationMenuLink asChild>
//                   <Link href="/contact" className="hover:bg-slate-500 hover:text-white px-3 py-2 rounded-xl transition-colors duration-300">
//                     Contact
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//           {/* <ModeToggle /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="bg-[#2D3748] backdrop-filter backdrop-blur-lg text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4 ml-20">
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
          {/* Add ModeToggle component here if needed */}
        </div>

        {/* Menu Bar icon for mobile screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none focus:bg-slate-500 p-2 rounded-md transition duration-300"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-[#2D3748] backdrop-filter backdrop-blur-lg text-white shadow-md">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2 items-center mt-4">
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
        )}
      </div>
    </div>
  );
}
