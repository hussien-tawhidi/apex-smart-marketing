"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function HomeTutorials() {
  const tutorials = [
    {
      id: 1,
      title: "آموزش ساخت صفحه فرود با Next.js",
      desc: "یاد بگیرید چگونه یک صفحه فرود واکنش‌گرا با طراحی مدرن در Next.js بسازید.",
      img: "/assets/services/social.jpg",
      link: "/services/nextjs-landing",
    },
    {
      id: 2,
      title: "مدیریت حالت با Zustand در پروژه‌های React",
      desc: "آشنایی با کتابخانه Zustand برای مدیریت حالت به روشی ساده و سریع.",
      img: "/assets/services/social.jpg",
      link: "/services/zustand-state",
    },
    {
      id: 3,
      title: "اتصال MongoDB به Next.js",
      desc: "آموزش گام‌به‌گام برای اتصال و استفاده از پایگاه داده MongoDB در Next.js.",
      img: "/assets/services/social.jpg",
      link: "/services/mongodb-nextjs",
    },
    {
      id: 4,
      title: "ساخت فرم تماس با EmailJS",
      desc: "در این آموزش یاد می‌گیرید چطور با EmailJS فرم تماس کاملاً کاربردی بسازید.",
      img: "/assets/services/social.jpg",
      link: "/services/emailjs-form",
    },
  ];

  return (
    <section className='py-20 relative z-10'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Title */}
        <div className='flex items-center justify-between'>
          <div className='text-right mb-14'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 dark:text-white'>
              جدیدترین آموزش‌ها
            </h2>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              با جدیدترین آموزش‌های ما همیشه به‌روز بمانید.
            </p>
          </div>
          <Link href={"/taturials"} className="border border-my-gray/30 py-1 px-2 rounded">همه اموزش ها</Link>
        </div>

        {/* Tutorials grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {tutorials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='group border border-my-gray/30 bg-my-bg/30 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300'>
              <div className='relative h-44 w-full overflow-hidden'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='p-5 text-right'>
                <h3 className='font-semibold text-lg text-gray-800 dark:text-white mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed'>
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className='inline-flex items-center gap-2 text-my-red font-medium hover:gap-3 transition-all'>
                  مطالعه آموزش
                  <FaArrowLeft className='text-xs' />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
