import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomNavigation } from "@/components/bottom-navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { AnimatedBackground } from "@/components/animated-background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hacker Residency Group",
  description: "An experimental hacker residency in Da Nang, Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className="relative z-0">
            <Header />
            <main className="min-h-screen pb-20">{children}</main>
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
