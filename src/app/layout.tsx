import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
const calistoga = Calistoga({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-900 text-white`}>{children}</body>
    </html>
  );
}
