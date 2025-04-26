"use client";
import { motion } from "framer-motion";

export default function Statement() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col gap-5 c-container-px py-20"
    >
      <p className="text-black/40 text-base font-bold">MISSION STATEMENT</p>
      <h3 className="text-c-text text-8 md:text-5xl leading-1.3 md:-tracking-2 font-montserrat">
        CarewiseMBS aims to empower{" "}
        <span className="font-semibold">Healthcare Providers</span> with smart &
        streamlined <span className="font-semibold">Billing Solutions</span> -
        so they can focus on care, not collections. Because it's not about being
        louder, It's about being smarter.
      </h3>
    </motion.section>
  );
}
