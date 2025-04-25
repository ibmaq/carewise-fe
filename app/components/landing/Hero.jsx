"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { rightArrowIcon } from "../UI/icons";

export default function Hero() {
  return (
    <header className="hero flex items-center">
      <div className="c-container">
        <div className="content-container flex flex-col gap-6.75 text-white">
          <h3 className="font-montserrat text-10.5 md:text-20.5 leading-1.2 font-light -tracking-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-semibold"
            >
              Modern Medical Billing Solutions.
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              Maximise Revenue and Minimise Hassle
            </motion.span>
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl/1.4"
          >
            We help healthcare providers streamline revenue, reduce denials, and
            get paid faster without the stress
          </motion.p>
          <div className="flex max-md:flex-col gap-4">
            <Link href={"/contact"}>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="c-btn btn-pr"
              >
                Schedule a Consultation Now!
              </motion.button>
            </Link>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="c-btn btn-sc"
            >
              Learn more
              <span>{rightArrowIcon}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
