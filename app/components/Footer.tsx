"use client";

import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMedia = [
    { name: "GitHub", icon: Github, link: "https://github.com/hashproton" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/hashproton/",
    },
    { name: "Email", icon: Mail, link: "mailto:edscriptdev@gmail.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary/5 dark:bg-primary/10 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Navigation
            </h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#experience"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">About</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Decoding complexity, architecting solutions, and sparking dev
              dialogues. Let&#39;s build something extraordinary.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} Eduardo Carvalho. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
