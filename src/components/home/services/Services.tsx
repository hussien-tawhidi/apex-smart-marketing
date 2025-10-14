"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

type servicesType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
};

const servicesSeed: servicesType[] = [
  {
    id: 1,
    title: "برندینگ",
    description: "بازطراحی فروشگاه اینترنتی با صفحات محصول سریع و حرفه‌ای.",
    tags: ["Webdesign", "E-Commerce"],
    image: "/assets/services/branding.jpg",
    url: "#",
  },
  {
    id: 2,
    title: "طراحی وب‌سایت",
    description: "طراحی لوگو و هویت بصری کامل برای برندهای تکنولوژی.",
    tags: ["Branding", "Illustration"],
    image: "/assets/services/web.jpg",
    url: "#",
  },
  {
    id: 3,
    title: "بازاریابی شبکه‌های اجتماعی",
    description: "پوسترهای مفهومی با تایپوگرافی مینیمال و مدرن.",
    tags: ["Poster Design", "Art"],
    image: "/assets/services/social.jpg",
    url: "#",
  },
  {
    id: 4,
    title: "طراحی پوستر",
    description: "تصویرسازی اختصاصی برای رابط کاربری اپلیکیشن.",
    tags: ["Illustration", "Webdesign"],
    image: "/assets/services/poster.jpg",
    url: "#",
  },
  {
    id: 5,
    title: "تولید محتوا",
    description: "چاپ‌های خاص و محدود برای نمایشگاه و فروش گالری.",
    tags: ["Prints", "Art"],
    image: "/assets/services/content-creation.webp",
    url: "#",
  },
  {
    id: 6,
    title: "استراتژی خلاق و مشاوره",
    description: "طراحی سیستم کامپوننت برای داشبوردهای تحلیلی.",
    tags: ["UI/UX", "Webdesign"],
    image: "/assets/services/Creative-strategy-sonsulting.jpg",
    url: "#",
  },
];

const allTags = [
  "All",
  "Webdesign",
  "Illustration",
  "Branding",
  "Art",
  "Poster Design",
  "Prints",
  "E-Commerce",
  "UI/UX",
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Services() {
  return (
    <div className='bg-my-bg'>
      <section
        id='projects'
        className='max-w-7xl mx-auto px-6 py-16 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
          animate='show'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden'>
          {servicesSeed.map((p) => (
            <motion.article
              key={p.id}
              variants={cardVariants}
              className='relative group overflow-hidden shadow-lg bg-gray-900 text-white cursor-pointer'>
              {/* image */}
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={400}
                className='object-cover w-full h-full'
              />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
