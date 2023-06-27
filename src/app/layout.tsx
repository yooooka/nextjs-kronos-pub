import { m_plus_1p, outfit } from "./font";
import "./globals.css";

export const metadata = {
  title: "DX導入ならクロノス株式会社",
  description:
    "株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い",
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
