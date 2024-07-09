// "use client";

// import * as React from "react";
// import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import avatar from '../../public/avatar.jpg'


// // Dynamically import ModeToggle to ensure it only renders on the client side
// const ModeToggle = dynamic(() => import("../modetoggle/ModeToggle"), { ssr: false });

// export default function Navbar() {
//   const [mounted, setMounted] = React.useState(false);

//   // Ensure this code runs only on the client
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div className="bg-[#2D3748] backdrop-filter backdrop-blur-lg text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center">
//           <Link href="/">
//           <Image
//             src= {avatar}
//             alt="Pranav Gandesree"
//             width={50} 
//             height={50} 
//              className="cursor-pointer rounded-full"
//           />
//         </Link>
//         </div>

//         <div className="flex items-center space-x-6">
//           <NavigationMenu>
//             <NavigationMenuList className="flex space-x-4">
//               <NavigationMenuItem className="hover:text-gray-500 ">
//                 <NavigationMenuLink asChild>
//                   <Link href="/about">About</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="hover:text-gray-500">
//                 <NavigationMenuLink asChild>
//                   <Link href="/projects">Projects</Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="hover:text-gray-500">
//                 <NavigationMenuLink asChild>
//                   <Link href="/contact">Contact</Link>
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





import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import avatar from '../../public/avatar.jpg';

export default function Navbar() {
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

        <div className="flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem className="text-lg">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="hover:bg-slate-500 hover:text-white px-3 py-2  rounded-xl transition-colors duration-300">
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
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
