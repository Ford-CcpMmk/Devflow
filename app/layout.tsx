import type { Metadata } from "next";
import React from "react";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share, knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* if you use .className, it will set it as defualt font of the application. */}
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Basically, the HTML created on the server is sent to the browser. But as soon as it's loaded in the browser, the next theme updates elements, rusulting in a different HTML skeleton. This is what a hydration mismatch is. To fix this issue, which is really not an issue, NextTheme recommends suppressing hydration warnings. It will only suppress hydration warnings at one level deep. Only this one coming from Next Theme.*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
