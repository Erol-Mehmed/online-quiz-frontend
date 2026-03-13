import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Quizzes",
  description: "Create and solve quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 py-8">
          <Container>{children}</Container>
        </main>

        <Footer />
      </body>
    </html>
  );
}
