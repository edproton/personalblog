"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            Eduardo Carvalho
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Full Stack Developer specializing in .NET and Next.js, with a
            passion for elegant solutions to complex problems. Expertise in
            design patterns, Domain-Driven Design (DDD), and various
            architectural approaches from microservices to modular monoliths and
            clean architecture to onion architecture.
          </p>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg">
            <Image
              src={`/profile.png`}
              alt="Eduardo Carvalho"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
