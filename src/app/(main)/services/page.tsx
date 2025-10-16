"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { graphicServices, webServices } from "../../../../constant/services";
import ServicesCard from "@/components/services/ServicesCard";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all"); // ✅ default: show all

  const categories = [
    { id: "all", label: "همه خدمات" },
    { id: "graphic", label: "طراحی گرافیک" },
    { id: "web", label: "توسعه و طراحی وب‌سایت و دیجیتال مارکتینگ" },
  ];

  // ✅ Combine all services for “All” view
  const allServices = [...graphicServices, ...webServices];

  // ✅ Filter logic
  const servicesToShow =
    activeCategory === "graphic"
      ? graphicServices
      : activeCategory === "web"
      ? webServices
      : allServices;

  return (
    <div className='min-h-screen text-my-white relative z-10 py-20 px-4 max-w-6xl mx-auto'>
      {/* 🔹 معرفی */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='mb-20 text-center md:text-right'>
        <h1 className='text-5xl font-extrabold mb-4'>خدمات ما</h1>
        <p className='text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed'>
          ما ترکیبی از خلاقیت و تکنولوژی را برای ارائه‌ی بهترین خدمات گرافیکی،
          طراحی وب و بازاریابی دیجیتال فراهم کرده‌ایم.
        </p>
      </motion.div>

      {/* 🔹 دسته‌بندی / فیلتر */}
      <div className='flex md:flex-row flex-col gap-4 mb-10 justify-center md:justify-start'>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              activeCategory === cat.id
                ? "bg-my-orange text-my-white shadow-lg"
                : "bg-my-light text-my-gray"
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* 🔹 نمایش خدمات فیلتر شده */}
      <motion.section
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
