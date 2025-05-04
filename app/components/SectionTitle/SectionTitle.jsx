"use client";
import "./style.css";
import { motion } from "framer-motion";

const SectionTitle = ({ title, icon = "" }) => {
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
      className="relative mb-5 text-center max-w-[350px]"
    >
      <h3 className="text-3xl  flex items-center gap-2 px-6 py-3 rounded-md  border-l-[10px]   text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
        {icon}
        {title}
      </h3>
    </motion.section>
  );
};

export default SectionTitle;
