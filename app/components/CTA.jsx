"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { rightArrowIcon } from "./UI/icons";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="c-container-px">
        <div className="bg-primary-blue rounded-2xl p-8 flex max-md:flex-col-reverse gap-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col grow justify-between"
          >
            <div className="flex flex-col gap-8 text-white">
              <Image
                src={"/logo-white.png"}
                alt="carewise-logo-white"
                width={102}
                height={80}
              />
              <h3 className="font-montserrat text-4xl font-semibold -tracking-2">
                Join Carewise now to take your business to the next level!
              </h3>
              <p>Make your life and billing easier, today!</p>
            </div>
            <Link href={"/contact"}>
              <button className="c-btn btn-sc max-md:mt-8">
                Schedule a Consultation Now
                <span>{rightArrowIcon}</span>
              </button>
            </Link>
          </motion.div>
          <Image
            src={"/images/cta-image.webp"}
            alt="shaking-hands"
            width={560}
            height={374}
          />
        </div>
      </div>
    </section>
  );
}
