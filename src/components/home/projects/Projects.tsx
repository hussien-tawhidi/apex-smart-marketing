"use client";

import React from "react";
import ProjectSlider from "./ProjectSlider";
import {  BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section className='z-10 relative'>
      <div className='lg:flex text-my-white max-w-7xl mx-auto px-6 py-16 items-center gap-10'>
        {/* Left content */}
        <motion.div
          className='flex-1 space-y-6 text-right'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h3 className='text-3xl md:text-5xl font-extrabold leading-tight text-my-white'>
            برخی از <span className='text-primary'>بهترین پروژه‌ها</span>
          </h3>

          <p className=' leading-relaxed md:text-base text-sm'>
            هر پروژه‌ای که می‌سازم فقط چند خط کد نیست — بلکه داستانی از{" "}
            <span className='font-semibold bg-my-red p-1'>خلاقیت، همکاری</span> و{" "}
            <span className='font-semibold bg-my-red p-1'>یادگیری مداوم</span> است. از
            طراحی رابط‌های کاربری تمیز گرفته تا اپلیکیشن‌های فول‌استک، هرکدام
            نشان‌دهنده‌ی تعهد من برای حل مسائل واقعی با راه‌حل‌های مدرن و فکرشده
            هستند.
            <br />
            <br />
            من باور دارم طراحی خوب اعتماد می‌سازد و توسعه‌ی قوی ایده‌ها را زنده
            می‌کند. در ادامه نگاهی بیندازید به مجموعه‌ای از پروژه‌هایی که با
            اشتیاق، دقت و هدف ساخته‌ام.
          </p>

          {/* دکمه مشاهده پروژه‌ها */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className='flex items-center justify-end gap-3 group cursor-pointer w-fit ml-auto'>
            <span className='font-medium group-hover:underline text-primary'>
              مشاهده پروژه‌های منتخب
            </span>
            <div className='p-2 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors'>
              <BsArrowRight className='text-2xl text-primary group-hover:-translate-x-1 transition-transform' />
            </div>
          </motion.div>
        </motion.div>

        {/* Right content - the slider */}
        <div className='flex-1 md:mt-8 lg:mt-0'>
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
}
