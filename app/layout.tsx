import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas's Portfolio",
  description: "A portfolio of Thomas's work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="dark" className={inter.className}>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
