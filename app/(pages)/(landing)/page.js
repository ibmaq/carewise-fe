"use client";
import CTA from "@/app/components/CTA";
import Hero from "@/app/components/landing/Hero";
import Solutions from "@/app/components/landing/Solutions";
import WhyUs from "@/app/components/landing/WhyUs";
import Testimonials from "@/app/components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
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
        <h3 className="text-c-text text-8 md:text-5xl leading-1.3 md:-tracking-2">
          Carewise aims to empower{" "}
          <span className="font-semibold">
            independent healthcare providers
          </span>{" "}
          with smart, streamlined{" "}
          <span className="font-semibold">billing solutions</span>—so they can
          focus on care, not collections. Because it's not about being louder.
          It's about being smarter.
        </h3>
      </motion.section>
      <div className="image-banner"></div>
      <Solutions />
      <WhyUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
