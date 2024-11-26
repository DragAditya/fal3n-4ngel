import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dragadi.com"),
  title: "Aditya Wagh",
  description: "a developer with a highly distractable brain",
  keywords: [
    "developer",
    "web development",
    "programming",
    "adithya krishnan",
    "adithyakrishnan",
    "adi",
    "fal3n4ngel",
    "fal3n 4ngel",
    "Mar Baselios College Of Engineering",
    "github",
    "4di krish",
    "cool",
    "awesome",
    "portfolio",
    "web developer",
    "software developer",
    "software engineer",
    "sde",
    "softare development engineer",
    "full stack developer",
    "front end developer",
    "back end developer",
    "mern stack developer",
    "mern stack",
    "react developer",
    "react",
    "dotnet",
    "dotnet developer",
    "dotnet core",
    ".net",
    "c#",
    "c sharp",
    "c sharp developer",
    "c sharp dotnet",
    "nextjs",
    "nissan",
    "nissan digital",
    "nissan digital india",
    "nissan digital india pvt ltd",
    "oronium",
    "programmer",
    "coding",
    "google developer",
    "google developer student clubs",
  ],
  authors: [{ name: "Aditya Wagh" }],
  creator: "Aditya Wagh",
  publisher: "Aditya Wagh",
  openGraph: {
    title: "Aditya Wagh",
    description: "a Student Who building his dreams.",
    url: "https://www.dragadi.com",
    siteName: "Aditya Wagh's Portfolio",
    images: [
      {
        url: "https://www.dragadi.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Aditya's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Wagh",
    description: "a developer with a highly distractable brain",
    images: ["https://www.dragadi.com/logo.png"],
    creator: "@DragAditya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  alternates: {
    canonical: "https://www.DragAdi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} custom-scrollbar dark `}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
