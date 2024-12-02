import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { AppThemeContextProvider } from "@/providers/themeProvider";

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
  title: "Swimming Rank List",
  description: "Hungarian swimming rank list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <AppThemeContextProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-800 dark:text-white`}
          >
            {children}
          </body>
        </html>
      </AppThemeContextProvider>
    </ClerkProvider>
  );
}
