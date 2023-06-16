import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DX導入ならクロノス株式会社",
  description:
    "株式会社クロノスは、「寄り添う」ことを大切に、中小企業のDX化をお手伝い",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
