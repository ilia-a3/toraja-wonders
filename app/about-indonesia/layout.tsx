//prettier-ignore
"use client"
import "../globals.scss";
import "../globals.css";
import "./styles.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../navbar";

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
  {
    children;
  }
}
