import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const socialMedia = [
    { name: "GitHub", icon: Github, link: "github.com/hashproton" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "www.linkedin.com/in/hashproton/",
    },
  ];

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4 flex justify-end space-x-4">
        {socialMedia.map((social, index) => (
          <a
            target="_blank"
            key={index}
            href={`https://${social.link}`}
            className="text-foreground hover:text-primary"
          >
            <social.icon className="w-6 h-6" />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
