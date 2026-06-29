import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";

// Body / UI face — Inter.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Labels / tags / metadata — JetBrains Mono.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Display face — Hedvig Letters Serif, self-hosted from /fonts (CEO-provided).
// 18pt optical cut reads best at heading sizes.
export const display = localFont({
  src: [
    {
      path: "../fonts/HedvigLettersSerif_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});
