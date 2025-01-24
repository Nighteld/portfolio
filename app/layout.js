import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nikesh Shrestha",
  description: "This is my portfolio website created using Next.js and Tailwind CSS i'm specialized in front-end development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                {/* <div className="min-h-screen bg-gradient-to-br from-[#4a582f] via-[#2d4134] to-[#1e3a39]"> */}
        <Navbar />
        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
