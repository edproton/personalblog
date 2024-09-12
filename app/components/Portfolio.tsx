import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Footer from "./Footer";
import Timeline from "./Timeline";
import Services from "./Services";
import jobs from "../data/jobs";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";

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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
