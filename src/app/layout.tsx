import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./contexts/ThemeContext";
import image from "../../public/pic.jpg";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dieudonne - Full-Stack Developer & AI Enthusiast",
  description:
    "Welcome to my portfolio! I’m Dieudonne, a Full-Stack Developer and AI/ML enthusiast. Explore my projects, skills, and experience in web development and artificial intelligence.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Web Development",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Dieudonne", url: "https://dieudonnei.vercel.app" }],
  openGraph: {
    title: "Dieudonne - Full-Stack Developer & AI Enthusiast",
    description:
      "Welcome to my portfolio! I’m Dieudonne, a Full-Stack Developer and AI/ML enthusiast. Explore my projects, skills, and experience in web development and artificial intelligence.",
    url: "https://dieudonnei.vercel.app",
    siteName: "Dieudonne Portfolio",
    images: [
      {
        url: `https://dieudonnei.vercel.app/${image}`,
        width: 1200,
        height: 630,
        alt: "Dieudonne Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: `${image}`,
  //   title: "Dieudonne - Full-Stack Developer & AI Enthusiast",
  //   description:
  //     "Welcome to my portfolio! I’m Dieudonne, a Full-Stack Developer and AI/ML enthusiast. Explore my projects, skills, and experience in web development and artificial intelligence.",
  //   images: [`https://dieudonnei.vercel.app/${image}`],
  // },
  alternates: {
    canonical: "https://dieudonnei.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dieudonne",
              url: "https://dieudonnei.vercel.app/",
              sameAs: [
                "https://github.com/Iyabivuz-e",
                "https://linkedin.com/in/iyabivuze/",
              ],
              jobTitle: "Full-Stack Developer & AI Enthusiast",
              description:
                "I’m a Full-Stack Developer and AI/ML enthusiast passionate about building beautiful, functional, and user-friendly applications.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
