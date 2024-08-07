// import { Inter } from "next/font/google";
import "./globals.css";
// import PrelineScript from "./components/PrelineScript";
import React from "react";

import PrelineScript from "./components/PrelineScript";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDK | INTEGRAL DEVELOPMENT KONSULT",
  description: "…Committed to Career & Professional Development",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body>
        {children}
       <PrelineScript />
      </body>
    </html>
  );
}
