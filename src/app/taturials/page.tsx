"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CiVideoOn } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const tutorials = [
  {
    id: 1,
    title: "آموزش Next.js مقدماتی",
    category: "وب",
    image: "/assets/services/social.jpg",
    description:
      "شروع یادگیری Next.js برای ساخت وب‌سایت‌های سریع و مدرن با رندر سمت سرور و مسیرهای داینامیک.",
    link: "#",
    video: "https://www.youtube.com/embed/TvdWMd1wZ3Y",
  },
  {
    id: 2,
    title: "آموزش طراحی پوستر با Photoshop",
    category: "گرافیک",
    image: "/assets/services/social.jpg",
    description:
      "یادگیری تکنیک‌های طراحی پوستر حرفه‌ای با Adobe Photoshop، از ایده تا اجرای نهایی.",
    link: "#",
  },
  {
    id: 3,
    title: "بهینه‌سازی سئو برای سایت‌های شرکتی",
    category: "مارکتینگ",
    image: "/assets/services/social.jpg",
    description:
      "روش‌های عملی برای بهبود رتبه سایت شما در گوگل، افزایش بازدید و جذب مشتری بیشتر.",
    link: "#",
    video: "https://www.youtube.com/embed/l1EssrLxt7E",
  },
  {
    id: 4,
    title: "آموزش React پیشرفته",
    category: "وب",
    image: "/assets/services/social.jpg",
    description:
      "در این آموزش مفاهیم پیشرفته React از جمله Context، Hooks و مدیریت وضعیت را یاد می‌گیرید.",
    link: "#",
  },
  {
    id: 5,
    title: "طراحی برندینگ شرکتی",
    category: "گرافیک",
    image: "/assets/services/social.jpg",
    description:
      "یاد بگیرید چگونه هویت بصری برند خود را بسازید تا در ذهن مشتری ماندگار شوید.",
    link: "#",
  },
];

const categories = ["همه", "وب", "گرافیک", "مارکتینگ"];

export default function TaturialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredTutorials =
    selectedCategory === "همه"
      ? tutorials
      : tutorials.filter((t) => t.category === selectedCategory);

  return (
    <div className='min-h-screen relative z-10 bg-gradient-to-br bg-my-light py-20 px-6 text-my-white'>
      {/* 🔹 Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center mb-12'>
        <h1 className='text-4xl font-extrabold mb-4'>آموزش‌ها و مقالات</h1>
        <p className='max-w-2xl mx-auto'>
          مجموعه‌ای از آموزش‌ها در زمینه توسعه وب، طراحی گرافیک و بازاریابی
          دیجیتال. برخی شامل ویدیوهای آموزشی اختصاصی هستند.
        </p>
      </motion.div>

      {/* 🔸 Filter Buttons */}
      <div className='flex flex-wrap justify-center gap-3 mb-10'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-my-orange text-my-white shadow-lg"
                : "bg-my-white/10 text-my-gray"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* 🧱 Tutorials Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <AnimatePresence>
          {filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className='group border border-my-gray/40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all'>
              <div className='relative w-full h-56 overflow-hidden'>
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-5 text-center'>
                <h3 className='text-xl font-semibold mb-2'>{tutorial.title}</h3>
                <p className='text-sm mb-3 line-clamp-2'>
                  {tutorial.description}
                </p>
                <div className='flex justify-center gap-4'>
                  {tutorial.video && (
                    <button
                      onClick={() => setActiveVideo(tutorial.video!)}
                      className='px-4 py-2 bg-my-orange text-sm rounded-lg transition flex items-center gap-2'>
                      <CiVideoOn className='text-xl' /> مشاهده ویدیو
                    </button>
                  )}
                  <Link
                    href={tutorial.link}
                    className='px-4 py-2 flex items-center gap-2 bg-my-dark text-sm rounded-lg transition'>
                    <IoEyeOutline className='text-xl' /> مشاهده آموزش
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 🎬 Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className='relative bg-gray-900 rounded-2xl p-4 shadow-2xl max-w-3xl w-full mx-4'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}>
              <button
                onClick={() => setActiveVideo(null)}
                className='absolute top-3 right-3 text-gray-400 hover:text-white text-2xl'>
                ✕
              </button>
              <div className='aspect-video rounded-xl overflow-hidden'>
                <iframe
                  src={activeVideo}
                  title='Tutorial Video'
                  allowFullScreen
                  className='w-full h-full'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
