"use client"

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function Whatsupp() {
  return (
    <motion.a
      href='https://wa.me/989932268115'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed md:bottom-6 bottom-24 right-6 z-50 flex items-center justify-center md:w-10 md:h-10 w-8 h-8 rounded-full bg-my-green shadow-lg hover:shadow-green-500/50 text-my-white transition-all duration-300 hover:scale-110 group'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <FaWhatsapp className='md:text-2xl text-xl' />

      {/* Tooltip */}
      <span className='absolute right-16 bg-my-dark text-my-white px-3 py-1.5 rounded-lg text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap'>
        چت در واتساپ
      </span>

      {/* Glow effect */}
      <span className='absolute inset-0 rounded-full bg-my-green/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
    </motion.a>
  );
}
