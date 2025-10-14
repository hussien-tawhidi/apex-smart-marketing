"use client";

import { motion } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface Props {
  plan: Plan;
  index: number;
}

export default function PricingCard({ plan, index }: Props) {
  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05, y: -4 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden text-my-white transition-all duration-500 ${
        plan.popular
          ? "bg-gradient-to-br from-my-red via-my-dark-yellow to-my-orange "
          : "bg-my-dark border-gray-200"
      }`}>
      {/* Glow behind popular card */}
      {plan.popular && (
        <div className='absolute inset-0 bg-gradient-to-br from-my-red to-my-red/30 blur-2xl -z-10' />
      )}

      {/* Ribbon for popular plan */}
      {plan.popular && (
        <div className='absolute top-4 right-4 bg-my-white text-my-dark text-xs font-semibold px-3 py-1 rounded-full shadow'>
          محبوب‌ترین
        </div>
      )}

      {/* Plan Name */}
      <h3 className='text-2xl font-bold mb-3 text-right mt-5 tracking-wide'>
        {plan.name}
      </h3>

      {/* Price */}
      <p
        className={`text-right text-4xl font-extrabold mb-6 ${
          plan.popular ? "text-my-white" : "text-my-red"
        }`}>
        {plan.price}
      </p>

      {/* Feature List */}
      <ul className='space-y-3 mb-8 text-sm leading-relaxed text-right'>
        {plan.features.map((feature, i) => (
          <li key={i} className='flex items-center gap-2'>
            <span className='text-my-orange'>
              <FaRegCircleCheck />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className='text-right'>
        <motion.button
          whileTap={{ scale: 0.96 }}
          className={`px-6 py-2.5 rounded-xl font-semibold shadow-md transition-all ${
            plan.popular
              ? "bg-white text-my-dark"
              : "bg-my-orange text-my-white"
          }`}>
          انتخاب پلن
        </motion.button>
      </div>
    </motion.div>
  );
}
