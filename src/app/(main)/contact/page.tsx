"use client";

import FormInput from "@/components/shared/FormInput";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-my-bg text-my-white flex items-center justify-center py-30 px-6 relative overflow-hidden'>
      {/* پس‌زمینه نقشه با تیرگی */}
      <div className="absolute inset-0 bg-[url('/assets/map-bg.png')] bg-cover bg-center opacity-10"></div>

      <div className='relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 direction-rtl'>
        {/* 🟩 بخش اطلاعات تماس */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-10 text-right'>
          <h1 className='text-5xl font-extrabold mb-6'>
            تماس با <span className='text-my-orange'>ما</span>
          </h1>

          <div>
            <h3 className='text-lg font-semibold text-my-gray mb-2'>
              ساعت کاری
            </h3>
            <p className='leading-relaxed'>
              کرج، بلوار دانش <br />
              روبه‌روی پارک فناوری <br />
              ایران
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-my-gray mb-2'>
              راه‌های ارتباطی
            </h3>
            <div className='space-y-2'>
              <p className='flex items-center gap-2'>
                <FaEnvelope className='text-my-orange' /> mountain@point.com
              </p>
              <p className='flex items-center gap-2'>
                <FaPhoneAlt className='text-my-orange' /> ۰۹۹۳۲۲۶۸۱۱۵
              </p>
            </div>
          </div>

          <div className='flex justify-end gap-4 mt-6 text-my-gray'>
            <a href='#' className='hover:text-my-orange transition'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='hover:text-my-orange transition'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='hover:text-my-orange transition'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </motion.div>

        {/* 🟩 بخش فرم تماس */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='relative bg-neutral-900 p-8 rounded-xl shadow-lg border border-gray-800'>
          {/* خطوط سبز گوشه‌ها */}
          <span className='absolute top-0 left-0 w-8 h-1 bg-my-orange'></span>
          <span className='absolute top-0 left-0 w-1 h-8 bg-my-orange'></span>
          <span className='absolute top-0 right-0 w-8 h-1 bg-my-orange'></span>
          <span className='absolute top-0 right-0 w-1 h-8 bg-my-orange'></span>
          <span className='absolute bottom-0 left-0 w-8 h-1 bg-my-orange'></span>
          <span className='absolute bottom-0 left-0 w-1 h-8 bg-my-orange'></span>
          <span className='absolute bottom-0 right-0 w-8 h-1 bg-my-orange'></span>
          <span className='absolute bottom-0 right-0 w-1 h-8 bg-my-orange'></span>

          <h3 className='text-2xl font-bold mb-6 text-center'>فرم تماس</h3>

          <form className='space-y-6 text-right'>
            <FormInput
              label='نام شما'
              name='name'
              placeholder='نام خود را وارد کنید'
            />
            <FormInput
              label='ایمیل'
              name='email'
              type='email'
              placeholder='ایمیل خود را وارد کنید'
            />
            <FormInput
              label='پیام شما'
              name='message'
              textarea
              placeholder='متن پیام خود را بنویسید...'
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='w-full bg-my-orange font-semibold py-3 rounded-lg transition'>
              ارسال پیام
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
