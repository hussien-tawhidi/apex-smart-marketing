"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "فروشگاه آنلاین Arax",
    category: "وب",
    image: "/assets/services/social.jpg",
    description: "فروشگاه اینترنتی با Next.js و MongoDB.",
    link: "https://arax-three.vercel.app/",
  },
  {
    id: 2,
    title: "پنل ادمین مدرن",
    category: "وب",
    image: "/assets/services/social.jpg",
    description: "پنل مدیریت واکنش‌گرا با گراف‌ها و احراز هویت.",
    link: "https://admin-dashboard-delta-sepia.vercel.app/",
  },
  {
    id: 3,
    title: "طراحی برندینگ و پوستر",
    category: "گرافیک",
    image: "/assets/services/social.jpg",
    description: "طراحی گرافیکی تبلیغاتی و برندینگ با Adobe Suite.",
  },
  {
    id: 4,
    title: "کمپین تبلیغاتی شبکه‌های اجتماعی",
    category: "مارکتینگ",
    image: "/assets/services/social.jpg",
    description: "مدیریت کمپین‌های تبلیغاتی با استراتژی هدفمند.",
  },
];

const categories = ["همه", "وب", "گرافیک", "مارکتینگ"];

export default function SamplePage() {
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredProjects =
    selectedCategory === "همه"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className='min-h-screen bg-fixed bg-cover bg-center py-20 px-6 relative z-10'>
      {/* 🔹 Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center mb-12'>
        <h1 className='text-4xl font-extrabold mb-4 text-my-white'>
          پروژه‌های من
        </h1>
        <p className='text-my-white max-w-2xl mx-auto'>
          در این بخش می‌توانید برخی از پروژه‌هایی که انجام داده‌ام را مشاهده
          کنید.
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
                ? "bg-my-orange text-white shadow-lg"
                : "bg-my-white/20 text-my-white"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* 🧱 Projects Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className='group bg-my-white/10 backdrop-blur-md border border-my-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all'>
              <div className='relative w-full h-56 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-5 text-center'>
                <h3 className='text-xl font-semibold text-my-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-sm mb-3 line-clamp-2'>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-my-orange font-semibold hover:underline'>
                    مشاهده پروژه ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
