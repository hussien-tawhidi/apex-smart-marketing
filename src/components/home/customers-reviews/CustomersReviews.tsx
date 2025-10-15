"use client";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CustomersSection() {
  const reviews = [
    {
      name: "مهوش",
      text: "تعهد بالا و ارتباط دوستانه باعث شد پروژه با کیفیت عالی تحویل داده شود.",
      img: "/assets/services/social.jpg",
    },
    {
      name: "الیزابت جف",
      text: "در مسیر کار همیشه پاسخگو بودند و ایده‌های خلاقانه‌ای ارائه کردند.",
      img: "/assets/services/social.jpg",
      active: true,
    },
    {
      name: "امیلی توماس",
      text: "تجربه همکاری بسیار خوبی بود، از کیفیت طراحی بسیار راضی هستم.",
      img: "/assets/services/social.jpg",
    },
  ];

  return (
    <section className='relative w-full py-24 bg-my-bg/60 overflow-hidden'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 gap-16 relative z-10'>
        {/* Right Section */}
        <div className='flex-1 flex flex-col gap-6 relative'>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
              className={`relative rounded-xl shadow-lg p-5 pr-8 flex items-center gap-4 border-r-[6px] transition-all duration-300 ${
                review.active
                  ? "bg-my-white border-my-red transform md:translate-x-10"
                  : "bg-my-white border-my-gray/40 hover:border-my-red/70"
              }`}>
              <div className='text-right flex-1'>
                <h4 className='text-lg font-semibold text-my-dark'>
                  {review.name}
                </h4>
                <p className='text-my-gray text-sm mt-1'>{review.text}</p>
              </div>
              <Image
                src={review.img}
                alt={review.name}
                width={60}
                height={60}
                className='rounded-full object-cover shadow-sm border border-gray-200'
              />
              <FaQuoteRight
                className={`${
                  review.active ? "text-my-red" : "text-my-light"
                } text-xl absolute top-3 left-3`}
              />
            </motion.div>
          ))}
        </div>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex-1 flex flex-col md:items-end space-y-5'>
          <h2 className='text-4xl md:text-5xl font-bold leading-snug text-my-white'>
            <span className='block'>نظر مشتریان ما</span>
          </h2>
          <p className='leading-relaxed text-my-white text-base md:w-3/4'>
            ارتباط صمیمی، تعهد بالا و دقت در جزئیات باعث رضایت کامل مشتریان ما
            شده است. همیشه تلاش می‌کنیم تجربه‌ای متفاوت و خاص ارائه دهیم.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='mt-6 bg-gradient-to-r from-my-gray to-my-white text-my-dark px-6 py-3 rounded-md shadow-md hover:shadow-xl transition-all'>
            مشاهده بیشتر
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle gradient background glow */}
      <div className='absolute inset-0 bg-gradient-to-t from-my-dark/10 via-transparent to-transparent pointer-events-none'></div>
    </section>
  );
}
