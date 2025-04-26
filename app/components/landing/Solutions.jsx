"use client";
import { motion } from "framer-motion";
import { solutionsData } from "@/app/(pages)/(landing)/data";

export default function Solutions() {
  return (
    <section id="services" className="py-20">
      <div className="c-container-px flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="font-montserrat text-5xl/tight font-semibold -tracking-2">
            Our Medical Solutions
          </h3>
          <p className="text-xl">
            Our Professional Billing Solutions Designed to Support Your Practice
          </p>
        </div>
        <div className="flex max-md:flex-col gap-10 md:py-8">
          {solutionsData.slice(0, 3).map((solution, solutionIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: solutionIndex * 0.2,
              }}
              viewport={{ once: true, amount: 0.1 }}
              key={solutionIndex}
              className="flex flex-col gap-5 w-full"
            >
              <span className="mx-auto">{solution.icon}</span>
              <div className="flex flex-col gap-3 text-center">
                <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                  {solution.title}
                </h4>
                <p className="text-base/1.4">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex max-md:flex-col gap-10 md:py-8">
          {solutionsData.slice(3, 6).map((solution, solutionIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: solutionIndex * 0.2,
              }}
              viewport={{ once: true, amount: 0.1 }}
              key={solutionIndex}
              className="flex flex-col gap-5 w-full"
            >
              <span className="mx-auto">{solution.icon}</span>
              <div className="flex flex-col gap-3 text-center">
                <h4 className="font-montserrat text-2xl/1.4 font-semibold -tracking-2">
                  {solution.title}
                </h4>
                <p className="text-base/1.4">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
