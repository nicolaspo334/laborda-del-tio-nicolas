import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "La Borda del Tío Nicolás – Casa Rural en Aribe, Navarra",
  description:
    "Casa rural en pleno Pirineo Navarro, a orillas del río y junto a la Selva de Irati. Reserva tu estancia en Aribe, Navarra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
