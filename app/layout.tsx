import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  // It retrieves the current session from cookies stored in the browser.
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
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
            {children}
          </ThemeProvider>
          <Toaster position="top-center" richColors />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
