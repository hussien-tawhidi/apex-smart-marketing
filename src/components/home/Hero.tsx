"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: typeof custom === "number" ? custom : 0,
        ease: "easeOut",
      },
    }),
  };

  const containerVariant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <motion.section
        dir='rtl'
        initial='hidden'
        animate='show'
        variants={containerVariant}
        className=' h-screen flex items-center justify-center text-white overflow-hidden'>
    
        <div className='relative z-10 flex flex-col justify-center items-center px-6 md:pb-0 pb-30 md:px-16 text-center space-y-6'>
          {/* Title */}
          <motion.h1
            variants={textVariant}
            custom={0.3}
            className='sm:text-5xl text-3xl md:text-7xl font-extrabold tracking-tight leading-tight'>
            اپیکس اسمارت مارکتینگ
          </motion.h1>

          <motion.h2
            variants={textVariant}
            custom={0.5}
            className='sm:text-2xl text-xl md:text-3xl font-light tracking-widest'>
            خلاقیت و نوآوری
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textVariant}
            custom={0.7}
            className='max-w-2xl text-base md:text-lg text-[14px] leading-relaxed'>
            ما به برندها کمک می‌کنیم تا با طراحی مدرن، رابط کاربری هوشمند و
            تجربه کاربری منحصربه‌فرد، در دنیای دیجیتال بدرخشند.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariant}
            custom={0.9}
            className='flex flex-col sm:flex-row gap-4 items-center justify-center mt-6'>
            <Link
              href='#about'
              className='px-8 py-3 rounded-full md:text-[16px] text-[12px] bg-my-white text-my-dark font-medium shadow-lg hover:bg-my-dark hover:text-my-white transition-all duration-500'>
              درباره ما
            </Link>

            <Link
              href='#contact'
              className='px-8 py-3 md:text-[16px] text-[12px] rounded-full border border-my-white/50 hover:bg-my-white hover:text-my-dark transition-all duration-500'>
              تماس با ما
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={textVariant}
            custom={1.1}
            className='flex items-center justify-center gap-6 text-2xl md:mt-10 mt-2'>
            {[
              { id: 1, icon: <TiSocialFacebook />, link: "/" },
              { id: 2, icon: <CiInstagram />, link: "/" },
              { id: 3, icon: <FaWhatsapp />, link: "/" },
            ].map((item, i) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.2 }}
                className='text-my-gray hover:text-my-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]'>
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Floating Arrow */}
        <motion.div
          className='absolute md:bottom-7 bottom-30 left-1/2 -translate-x-1/2 z-10'
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <div className="relative md:w-[30px] w-[20px] md:h-[50px] h-[35px] border-[3px] border-white rounded-full box-border mb-2 before:content-[''] before:absolute md:before:bottom-[30px] before:bottom-[20px] before:left-1/2 before:w-[6px] before:h-[6px] before:-ml-[3px] before:bg-white before:rounded-full before:shadow-[0_-5px_3px_1px_rgba(255,255,255,0.4)] before:animate-[scrolldown_2s_infinite]" />

          {/* Chevrons */}
          <div className='flex flex-col items-center -ml-[-2px]'>
            <div className='w-[10px] h-[10px] border-r-[3px] border-b-[3px] border-white rotate-45 mt-[-6px] animate-[pulse_1s_ease-in-out_infinite_alternate]' />
            <div className='w-[10px] h-[10px] border-r-[3px] border-b-[3px] border-white rotate-45 mt-[-6px] animate-[pulse_1s_ease-in-out_infinite_alternate_0.5s]' />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
