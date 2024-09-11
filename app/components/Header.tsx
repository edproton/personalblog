"use client";

import { Button } from "@/components/ui/button";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
import Image from "next/image";
import Timeline from "./Timeline";
import jobs from "../data/jobs";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark/Light Mode Toggle */}
      <div className="container mx-auto px-4 py-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Header Section with Image */}
      <header className="container mx-auto px-4 py-16">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-3/4 z-10">
            <h1 className="text-4xl font-bold mb-2">Eduardo Carvalho</h1>
            <h2 className="text-2xl text-muted-foreground mb-4">
              Full Stack Developer
            </h2>
            <p className="max-w-2xl">
              Passionate about creating elegant solutions to complex problems.
              With a strong foundation in both front-end and back-end
              technologies, I strive to build scalable and user-friendly
              applications.
            </p>
          </div>
          <div className="md:w-1/3 md:absolute md:right-0 md:top-0 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="John Doe"
              className="rounded-full shadow-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <Timeline jobs={jobs} />

        <div className="text-center mt-8">
          <Button>
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
