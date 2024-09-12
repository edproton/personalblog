import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eduardo Carvalho",
    jobTitle: "Full Stack Developer",
    url: "https://www.eduardocarvalho.com/",
    sameAs: [
      "https://github.com/hashproton",
      "https://www.linkedin.com/in/hashproton/",
      "https://twitter.com/yourtwitterhandle",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Your Current Company",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University",
    },
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      ".NET",
      "Database Design",
      "API Development",
    ],
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
