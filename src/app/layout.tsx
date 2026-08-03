import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* Respaldo del stack del sistema: globals.css lo consume vía --font-ui. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dive Evolution",
  description:
    "Centro de buceo y tours en San Cristóbal, Galápagos. Más de 25 años de experiencia, cursos certificados por PSS y tours diarios por la isla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
