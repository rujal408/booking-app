import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './../style/app.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
