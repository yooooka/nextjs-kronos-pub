import { M_PLUS_1p, Outfit } from "next/font/google";
import "./globals.css";

const m_plus_1p = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-m-plus-1p",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export { m_plus_1p, outfit };
