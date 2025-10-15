"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { graphicServices, webServices } from "../../../../constant/services";
import ServicesCard from "@/components/services/ServicesCard";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("graphic"); // default category

  const categories = [
    { id: "graphic", label: "طراحی گرافیک" },
    { id: "web", label: " توسعه و طراحی وب‌سایت و دیجیتال مارکتینگ" },
  ];

  // Determine which services to show based on active category
  const servicesToShow =
    activeCategory === "graphic" ? graphicServices : webServices;

  return (
    <div className='min-h-screen text-my-white relative z-10 py-20 px-4 max-w-6xl mx-auto'>
      {/* 🔹 معرفی */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=' mb-20'>
        <h1 className='text-5xl font-extrabold mb-4'>خدمات ما</h1>
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed'>
          ما ترکیبی از خلاقیت و تکنولوژی را برای ارائه‌ی بهترین خدمات گرافیکی،
          طراحی وب و بازاریابی دیجیتال فراهم کرده‌ایم.
        </p>
      </motion.div>
      {/* 🔹 دسته‌بندی / فیلتر */}
      <div className='flex md:flex-row flex-col gap-4 mb-8'>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              activeCategory === cat.id
                ? "bg-my-orange text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* 🔹 نمایش خدمات فیلتر شده */}
      <motion.section
        className=''
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesToShow.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
