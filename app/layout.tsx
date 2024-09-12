import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import StructuredData from "./StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eduardo Carvalho - Full Stack Developer",
  description:
    "Portfolio of Eduardo Carvalho, a passionate Full Stack Developer specializing in creating elegant solutions to complex problems.",
  keywords:
    "Full Stack Developer, Web Development, React, Next.js, .NET, Database Design",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.eduardocarvalho.com/",
    siteName: "Eduardo Carvalho Portfolio",
    images: [
      {
        url: "https://www.eduardocarvalho.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eduardo Carvalho - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.eduardocarvalho.com/" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
