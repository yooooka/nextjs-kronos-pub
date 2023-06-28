import { m_plus_1p, outfit } from "./font";
import "./globals.css";

export const metadata = {
  title: "中小企業に「寄り添う」DX導入｜クロノス株式会社",
  description:
    "クロノスでは、ITを活用して中小企業のDXを推進。お客様に寄り添い、業務の効率化と効果の最大化を目指します。",
  robots: "noindex", // delete when the LP launch
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${m_plus_1p.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
