'use client'

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Avatar from '@/public/avatar.jpg'
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";
import {
  IconUserCircle,  // For "About Me"
  IconMail,        // For "Contact"
  IconFolder,      // For "Projects"
  IconHome,        // Keeping Home icon
} from "@tabler/icons-react";

import Image from "next/image";

export default function Sidebar() {
  const links = [
    {
      title: "Gandesree Pranav",
      icon: (
        <Image
          // src="https://assets.aceternity.com/logo-dark.png"
          src={Avatar}
          width={60}
          height={80}
          alt="Pranav Logo"
        />
      ),
      href: "/",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "About Me",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
   
    {
      title: "Contact me",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    // {
    //   title: "Twitter",
    //   icon: (
    //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
