// "use client";
//prettier-ignore
import "./globals.scss";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toraja Wonders - Explore Indonesia",
  description:
    "Explore the Sulawesi islands in Indonesia and book your next holiday.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
