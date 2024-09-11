"use client";

import { Button } from "@/components/ui/button";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Footer from "./Footer";
import Timeline from "./Timeline";
import jobs from "../data/jobs";
import Header from "./Header";

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

      <Header />

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
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
