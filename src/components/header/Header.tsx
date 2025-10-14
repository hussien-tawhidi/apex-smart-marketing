"use client";

import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "../../../constant";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Detect scroll or small screen
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(window.innerWidth < 768); // keep background if small screen
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
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between md:py-5 md:px-20 py-2 px-7 z-50 transition-all duration-300 ${
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
      {/* Custom Hamburger Button */}
      <div className='z-50'>
        <HamburgerButton onClick={toggleMenu} open={menuOpen} />
      </div>

      {/* Overlay + Left-aligned Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key='menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className='fixed top-0 left-0 right-0 bottom-0 min-h-screen md:bg-my-bg/80 bg-my-bg/90 backdrop-blur-[2px] z-40 flex'>
            {/* Left-aligned Menu Panel */}
            <motion.nav
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className='relative z-50 w-3/4 bg-my-bg sm:w-1/2 md:w-1/3 p-10 shadow-xl flex flex-col justify-center items-start space-y-2'>
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

            {/* Click outside the menu to close */}
            <div
              className='flex-1 z-40 cursor-pointer'
              onClick={toggleMenu}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
