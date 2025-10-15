"use client";

import { homeFeature } from "../../../constant";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each child
    },
  },
};

const cardVariants:Variants = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <div className='relative z-10 bg-my-bg py-20'>
      <motion.div
        className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-7 md:max-w-5xl sm:w-[90%] w-[95%] mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}>
        {homeFeature.map((item) => (
          <motion.div
            key={item.id}
            className='flex items-center text-center flex-col gap-3 border border-my-gray/30 p-3 rounded-xl'
            variants={cardVariants}>
            {item.icon && <item.icon className='md:text-7xl text-5xl' />}
            <h4 className='font-bold text-xl'>{item.title}</h4>
            <p className='text-my-white/80 md:text-[15px] text-[13px] px-5'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
