"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: IconType;

}

export default function ServicesCard({
  title,
  description,
  icon: Icon,

}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`relative w-full min-h-64 p-[2px] rounded-2xl overflow-hidden group`}>
      {/* Inner glass layer */}
      <div className='relative z-10 h-full w-full bg-my-bg/40 backdrop-blur-[3px] rounded-2xl border border-white/20 flex flex-col items- justify-center p-6 transition-all duration-500 group-hover:bg-my-white/20'>
        {/* Icon */}
        <div className='text-5xl mb-4 text-white/90 group-hover:text-white drop-shadow-lg transition-all duration-300'>
          <Icon />
        </div>

        {/* Title */}
        <h3 className='text-xl font-bold text-white mb-2 tracking-wide'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-sm text-gray-100/90 leading-relaxed max-w-[90%]'>
          {description}
        </p>
      </div>

      {/* Glow effect */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 bg-gradient-to-tr from-white/10 to-transparent'></div>
    </motion.div>
  );
}
