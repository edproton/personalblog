import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Footer from "./Footer";
import Timeline from "./Timeline";
import Services from "./Services";
import jobs from "../data/jobs";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-4 flex justify-end">
        <ThemeToggle />
      </header>

      <main>
        <Header />

        <section id="experience" className="container mx-auto px-4 py-16">
          <Timeline jobs={jobs} />
        </section>

        <section id="services">
          <Services />
        </section>

        <section
          id="contact"
          className="container mx-auto px-4 py-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            aria-label="View Resume (opens in a new tab)"
          >
            <Link
              href="https://rxresu.me/hashproton/eduardo-carvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Resume
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
