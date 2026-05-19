import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://heyl.co.jp"),
  title: "HEYL | Help Enrich Your Life",
  description: "HEYLは、同じ毎日が少しずつ豊かに色づいていくための体験をつくる会社です。",
  openGraph: {
    title: "HEYL | Help Enrich Your Life",
    description: "同じ毎日が少しずつ豊かに色づいていくための体験をつくる会社です。",
    url: "https://heyl.co.jp",
    siteName: "HEYL",
    locale: "ja_JP",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
