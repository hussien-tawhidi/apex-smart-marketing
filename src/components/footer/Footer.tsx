"use client";

import React from "react";
import { motion } from "framer-motion";
import { CiInstagram } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = ["خانه", "درباره ما", "پروژه‌ها", "خدمات", "تماس با ما"];

  return (
    <footer
      dir='rtl'
      className='relative overflow-hidden bg-gradient-to-b from-my-bg/95 to-my-bg text-my-white py-20 px-6 md:px-20'>
      {/* Background Glow */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent)]'></div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10'>
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='space-y-4 text-right'>
          <h3 className='text-xl md:text-2xl font-semibold'>درباره ما</h3>
          <p className='text-my-gray text-sm md:text-base leading-relaxed'>
            ما با تمرکز بر طراحی مدرن و توسعه وب، تجربه‌ای منحصربه‌فرد برای
            برندها خلق می‌کنیم. هدف ما این است که ایده‌های شما را به واقعیت
            دیجیتال تبدیل کنیم.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-4 text-right'>
          <h3 className='text-xl md:text-2xl font-semibold'>لینک‌های سریع</h3>
          <ul className='space-y-3 text-my-gray'>
            {links.map((link) => (
              <motion.li
                key={link}
                whileHover={{ x: -6, color: "#fff" }}
                transition={{ duration: 0.2 }}>
                <a
                  href={`#${link}`}
                  className="relative after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='space-y-4 text-right'>
          <h3 className='text-xl md:text-2xl font-semibold'>
            با ما در ارتباط باشید
          </h3>

          {/* Social Icons */}
          <div className='flex items-center gap-5 text-2xl mt-4'>
            {[FaWhatsapp, TiSocialFacebook, CiInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href='/'
                whileHover={{ scale: 1.2, rotate: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='bg-my-dark p-3 rounded-full hover:bg-primary transition-colors'>
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className='h-[1px] bg-gray-800 my-10 opacity-50'></div>

      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-4 text-my-gray text-sm'>
        <p>© 2025 تمامی حقوق برای شرکت شما محفوظ است.</p>

        {/* Scroll to top button */}
        <button
          className='group relative z-10 w-[50px] h-[50px] rounded-full border-none cursor-pointer select-none bg-my-white transition-all duration-200 shadow-none hover:shadow-[0_1px_5px_rgba(0,0,0,0.2)]'
          onClick={scrollToTop}>
          {/* SVG Arrow */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='absolute left-1/2 top-1/2 w-[20px] transition-all duration-300 h-[20px] fill-my-gray -translate-x-1/2 -translate-y-1/2 group-hover:animate-[bounce_2s_linear_infinite]'
            viewBox='0 0 24 24'>
            <path d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z' />
          </svg>
        </button>
      </div>
    </footer>
  );
}
