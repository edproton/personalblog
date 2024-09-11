"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "@/app/images/companies/profile.png";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-16">
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Eduardo Carvalho
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl text-muted-foreground mb-4">
              Full Stack Developer
            </h2>
            <p className="max-w-2xl">
              Passionate about creating elegant solutions to complex problems.
              With a strong foundation in both front-end and back-end
              technologies, I strive to build scalable and user-friendly
              applications.
            </p>
          </motion.div>
        </div>
        <div className="md:w-1/3 md:absolute md:right-0 md:top-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[300px] h-[300px]"
          >
            <Image
              src={profilePicture}
              alt="Eduardo Carvalho"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
