"use client";
import { motion } from "framer-motion";
export default function MainBg() {
  return (
    <>
      <div
        className='fixed inset-0 bg-center bg-cover z-[-1]'
        style={{ backgroundImage: 'url("/assets/hero.jpg")' }}></div>
  
    </>
  );
}
