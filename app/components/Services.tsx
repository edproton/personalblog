"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code, Server, Book, Globe, Cog, Lightbulb } from "lucide-react";

const services = [
  {
    title: ".NET Framework Legacy Maintenance",
    description:
      "Expert maintenance and upgrades for legacy .NET applications, ensuring seamless integration with modern technologies while improving performance and maintainability.",
    icon: Code,
  },
  {
    title: "Next.js and React Development",
    description:
      "Building scalable and performant web applications using Next.js and React, leveraging the latest features and best practices for optimal user experiences.",
    icon: Server,
  },
  {
    title: "REST API Design and Testing",
    description:
      "Crafting robust and efficient RESTful APIs with a focus on scalability, security, and adherence to best practices. Implementing comprehensive testing strategies for reliable API performance.",
    icon: Globe,
  },
  {
    title: "Software Architecture Consulting",
    description:
      "Providing expert guidance on architectural decisions, from microservices to modular monoliths, clean architecture to onion architecture, ensuring scalable and maintainable software systems.",
    icon: Cog,
  },
  {
    title: "Design Patterns and DDD Implementation",
    description:
      "Applying industry-standard design patterns and Domain-Driven Design principles to create flexible, maintainable, and business-aligned software solutions.",
    icon: Lightbulb,
  },
  {
    title: "Technical Tutoring and Mentorship",
    description:
      "Offering personalized tutoring and mentorship in .NET, Next.js, software architecture, and best practices, helping developers enhance their skills and advance their careers.",
    icon: Book,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Services Provided
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <service.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
