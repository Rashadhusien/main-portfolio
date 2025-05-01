"use client";
import "./style.css";
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        mass: 5,
      }}
      className="relative   h-[200px] text-center"
    >
      <h3 className="text-secondery w-full sm:w-[400px] mx-auto dark:text-primarylight sm:text-5xl text-4xl font-bold border duration-300 dark:hover:border-orange dark:hover:text-orange hover:border-blueElzero hover:text-blueElzero p-6">
        {title}
      </h3>
    </motion.section>
  );
};

export default SectionTitle;
