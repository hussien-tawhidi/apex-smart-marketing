"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHouseDoor, BsMenuButton } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { motion } from "framer-motion";

export default function MobileBottomNav({ toggleMenu }) {
  const pathname = usePathname() ?? "";

  const navItems = [
    { href: "/", icon: BsHouseDoor, label: "خانه" },
    { href: "/services", icon: TbHammer, label: "خدمات" },
    { href: "/contact", icon: LuContact, label: "مشاوره" },
  ];

  return (
    <header
      className={`flex md:hidden fixed bottom-0 left-0 right-0 items-center justify-around py-3 px-4 z-50 bg-my-bg/90 backdrop-blur-[2px] border-t border-white/10`}>
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={index}
            href={item.href}
            className='flex flex-col items-center text-sm relative z-10'>
            {/* Floating active circle */}
            {isActive && (
              <motion.div
                layoutId='activeCircle'
                className='absolute -top-3 w-12 h-12 bg-my-orange rounded-full shadow-lg z-0'
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <div
              className={`flex items-center justify-center w-10 h-10 relative z-10 text-2xl transition-colors ${
                isActive ? "text-white" : "text-my-white/80"
              }`}>
              <item.icon />
            </div>
            <span
              className={`text-[12px] mt-0.5 transition-colors ${
                isActive ? "text-my-orange" : "text-my-white/80"
              }`}>
              {item.label}
            </span>
          </Link>
        );
      })}

      {/* Menu button */}
      <button
        onClick={toggleMenu}
        className='flex flex-col items-center text-sm relative z-10'>
        <div className='flex items-center justify-center w-10 h-10 text-my-white/80'>
          <BsMenuButton className='text-2xl' />
        </div>
        <span className='text-[12px] text-my-white/80'>منو</span>
      </button>
    </header>
  );
}
