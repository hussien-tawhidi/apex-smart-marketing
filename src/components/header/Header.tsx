"use client";

import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "../../../constant";
import { TbHammer } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { BsHouseDoor, BsMenuButton } from "react-icons/bs";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { usePathname } from "next/navigation";
import MobileBottomNav from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname() as string;
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Detect scroll or small screen
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(window.innerWidth < 768);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrolled(true);
      } else if (window.scrollY <= 10) {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* 🔹 Desktop Header (Top) */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 items-center justify-between md:py-5 md:px-20 py-2 px-7 z-50 transition-all duration-300 ${
          scrolled ? "bg-my-bg/90 backdrop-blur-[2px]" : "bg-transparent"
        }`}>
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src='/assets/logo.png'
            alt='logo'
            width={100}
            height={100}
            className='md:w-10 w-8 object-cover'
          />
        </Link>

        {/* Hamburger */}
        <div className='z-50'>
          <HamburgerButton onClick={toggleMenu} open={menuOpen} />
        </div>
      </header>

      {/* 🔹 Mobile Header (Bottom) */}
      <MobileBottomNav toggleMenu={toggleMenu}/>

      {/* 🔹 Overlay + Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key='menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className='fixed inset-0 bg-my-bg/90 backdrop-blur-[2px] z-40 flex'>
            <motion.nav
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className='w-3/4 bg-my-bg sm:w-1/2 md:w-1/3 p-10 shadow-xl flex flex-col justify-center items-start space-y-2'>
              <div
                className='md:hidden flex absolute top-10 left-10 text-2xl'
                onClick={toggleMenu}>
                <MdOutlineCloseFullscreen />
              </div>
              {menu.map((item) => (
                <motion.div
                  key={item.id}
                  className='my-3'
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                  }}>
                  <Link
                    href={item.link}
                    className='text-3xl font-medium hover:underline transition-colors'
                    onClick={() => setMenuOpen(false)}>
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className='flex-1 cursor-pointer' onClick={toggleMenu}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
