"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { servicesSeed } from "../../../../constant";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 1, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <div className='bg-my-bg'>
      <section
        id='projects'
        className='max-w-7xl mx-auto px-6 py-16 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-right mb-10'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-3'>خدمات ما</h2>
          <p className='text-my-white/80 md:text-lg text-[13px] max-w-2xl ml-auto leading-relaxed'>
            ما مجموعه‌ای از خدمات خلاقانه ارائه می‌دهیم تا برند شما را در فضای
            دیجیتال متمایز کنیم — از طراحی وب و برندینگ تا تولید محتوا و مشاوره
            استراتژیک.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl overflow-hidden'>
          {servicesSeed.map((p) => (
            <motion.article
              key={p.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className='relative group overflow-hidden shadow-lg bg-gray-900 text-white cursor-pointer rounded-xl'>
              {/* image */}
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={400}
                className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
              />
              {/* overlay */}
              <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-opacity duration-300'></div>

              {/* info */}
              <div className='absolute bottom-0 p-4 text-right'>
                <h3 className='text-lg font-bold'>{p.title}</h3>
                <p className='text-sm text-my-white/80'>{p.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
