"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaBullseye, FaRocket, FaAward } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className='min-h-screen relative z-10 text-my-white py-20 px-6'>
      {/* 🔹 Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center mb-20'>
        <h1 className='text-5xl md:text-center text-right font-extrabold mb-4'>
          درباره ما
        </h1>
        <p className='max-w-2xl mx-auto md:text-center text-right leading-relaxed'>
          ما یک تیم خلاق و متخصص هستیم که با هدف ارائه خدمات نوآورانه در زمینه
          طراحی وب، برندینگ و بازاریابی دیجیتال فعالیت می‌کنیم.
        </p>
      </motion.div>

      {/* 🏢 شرکت */}
      <section className='max-w-6xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl font-bold mb-4'>درباره شرکت ما</h2>
          <p className='leading-relaxed mb-4'>
            ما در شرکت خود به ترکیب هنر، تکنولوژی و تجربه کاربری باور داریم. هدف
            ما ایجاد راهکارهایی است که نه تنها زیبا، بلکه کارآمد و اثرگذار
            باشند.
          </p>
          <p>
            از طراحی لوگو و هویت برند گرفته تا توسعه وب‌سایت‌های مدرن و سئو، ما
            با شما هستیم تا برندتان را به سطح بالاتری برسانیم.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='relative w-full h-72 rounded-2xl overflow-hidden shadow-2xl'>
          <Image
            src='/assets/services/social.jpg'
            alt='teamwork'
            fill
            className='object-cover'
          />
        </motion.div>
      </section>

      {/* 🎯 اهداف و ارزش‌ها */}
      <section className='max-w-6xl filter backdrop-blur-sm mx-auto mb-20 text-center'>
        <h2 className='text-3xl font-bold mb-10'>اهداف و ارزش‌های ما</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              icon: <FaBullseye size={40} />,
              title: "تمرکز بر کیفیت",
              desc: "ما همیشه در پی ارائه بهترین تجربه برای مشتریان خود هستیم.",
            },
            {
              icon: <FaRocket size={40} />,
              title: "نوآوری",
              desc: "خلاقیت و نوآوری در قلب هر پروژه ما قرار دارد.",
            },
            {
              icon: <FaUsers size={40} />,
              title: "همکاری تیمی",
              desc: "تیم ما با همکاری، بهترین راه‌حل‌ها را خلق می‌کند.",
            },
            {
              icon: <FaAward size={40} />,
              title: "رضایت مشتری",
              desc: "رضایت شما بزرگ‌ترین افتخار ماست.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='bg-my-white/10 rounded-xl p-6 shadow-lg border border-my-white/20  transition-all'>
              <div className='flex flex-col items-center gap-3'>
                <div className='text-my-orange'>{item.icon}</div>
                <h3 className='text-xl font-semibold'>{item.title}</h3>
                <p className='text-sm'>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 👥 اعضای تیم */}
      <section className='max-w-6xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-10'>تیم ما</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {[
            {
              name: "حسین توحیدی",
              role: "طراح و برنامه نویس",
              img: "/assets/services/social.jpg",
            },
            {
              name: "مهدی همت",
              role: "گرافیست",
              img: "/assets/services/social.jpg",
            },
            {
              name: "سارا احمدی",
              role: "مدیر بازاریابی دیجیتال",
              img: "/assets/services/social.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='bg-my-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-my-white/20'>
              <div className='relative w-full h-60'>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-lg font-bold'>{member.name}</h3>
                <p className='text-sm'>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
