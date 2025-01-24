"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-5xl mx-auto">
    <div className="relative ">
      <motion.span
        className="absolute left-0"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-white text-4xl">✦</span>
        {/* <img src="/star-2.svg" alt="star image" /> */}

      </motion.span>
      <motion.span
        className="absolute right-0 bottom-0"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="text-white text-4xl">✦</span>
        {/* <span className="text-[#c5e1b5] text-4xl">✦</span> */}
      </motion.span>
      <motion.h1
        className="text-[#c5e1b5] text-7xl md:text-9xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi. I&apos;m Nikesh.
        <br />A  Developer.
      </motion.h1>
      <motion.p
        className="text-[#9fb892] text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I have a strong desire to create user-centric, accessible, and captivating experiences.
      </motion.p>
    </div>
    </div>
  </section>
  );
}
