import type { Metadata } from "next";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";

export const metadata: Metadata = {
  title: "Robert Kovacs Portfolio",
  description:
    "I'm Robert Kovacs, a full-stack Next.js developer. Here, I showcase the programming languages I use, the projects I've built, and the companies and clients I've worked with.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased dark:bg-black`}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
