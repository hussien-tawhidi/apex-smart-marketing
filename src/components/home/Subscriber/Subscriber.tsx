import React from "react";

export default function Subscriber() {
  return (
    <div className='py-20  z-10 relative'>
      <div className='max-w-7xl mx-auto p-6 text-right'>
        <p className='h-1 md:text-4xl mb-10'>عضویت در خبرنامه</p>
        <p>هیچ فرصت جدیدی را از دست ندهید! همین حالا ثبت‌نام کنید</p>
        <div className='flex md:w-[50%] ml-auto w-full mt-10'>
          <div className='relative w-full'>
            <input
              id='email'
              name='email'
              type='email'
              placeholder=''
              className='border-b border-my-white w-full py-1 focus:border-b-2 transition-colors focus:outline-none peer bg-inherit text-right'
            />
            <label
              htmlFor='email'
              className='absolute -top-4 text-xs right-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm'>
              ایمیل
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
