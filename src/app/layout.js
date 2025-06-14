import "./globals.css";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';

import Script from "next/script";

// Define tu fuente local 'Outfit'
const outfit = localFont({
  src: '../fonts/Outfit-VariableFont_wght.ttf', // Ruta relativa desde este archivo (layout.js) hasta tu fuente
  display: 'swap', // 'swap' es una buena estrategia para mejorar el rendimiento de carga
  variable: '--font-outfit', // Opcional: Define una variable CSS para usarla en tus estilos
  weight: '100 900', // Define el rango de pesos disponibles para tu fuente variable
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio - Peter Aspiazu",
  description: "Portafolio personal de Peter Aspiazu, desarrollador web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.variable}>
      <body>

        {children}
        
        <Script 
          src="https://kit.fontawesome.com/0894a0420e.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
