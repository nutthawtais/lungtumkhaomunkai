import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  // Basic SEO
  title: "ข้าวมันไก่ ร้านอาหารใกล้ฉัน สั่งอาหาร ลุงตุ่มข้าวมันไก่",
  description:
    "ข้าวมันไก่ ขายดีสุดในหนองปรือ ข้าวหอมนุ่มมันร้อนๆกำลังดี ตัวเนื้อไก่เพียงแค่กัดก็รับรู้ได้ถึงความฉ่ำน้ำ น้ำจิ้มรสเด็ด ที่ไม่มีใครเหมือน รับประกันความอร่อย",
  keywords: [
    "ร้านอาหารใกล้ฉัน",
    "restaurants",
    "ข้าวมันไก่",
    "ร้านอาหาร",
    "ข้าวมันไก่ พัทยา",
    "ข้าวมันไก่พัทยา",
    "ข้าวมันไก่ใกล้ฉัน",
    "ร้านอาหารอร่อย",
    "ลุงตุ่มข้าวมันไก่",
  ],

  // Open Graph general (Facebook, Pinterest & Google+)
  openGraph: {
    title: "ลุงตุ่มข้าวมันไก่ | Loong Toom Hainanese chicken rice",
    description:
      "ข้าวมันไก่ ขายดีสุดในหนองปรือ ข้าวหอมนุ่มมันร้อนๆกำลังดี ตัวเนื้อไก่เพียงแค่กัดก็รับรู้ได้ถึงความฉ่ำน้ำ น้ำจิ้มรสเด็ด ที่ไม่มีใครเหมือน รับประกันความอร่อย",
    url: "https://lungtum-khao-man-gai.web.app/",
    siteName: "ร้านอาหารใกล้ฉัน ข้าวมันไก่ ข้าวมันไก่พัทยา ร้านอาหาร",
    images: [
      {
        url: "/img/hero/bg-lungtum4.png",
        width: 1034,
        height: 563,
        alt: "ร้านอาหารใกล้ฉัน ข้าวมันไก่ ข้าวมันไก่พัทยา ร้านอาหาร",
      },
    ],
    type: "website",
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "ร้านอาหารใกล้ฉัน ข้าวมันไก่ ข้าวมันไก่พัทยา ร้านอาหาร",
    description:
      "ข้าวมันไก่ ขายดีสุดในหนองปรือ ข้าวหอมนุ่มมันร้อนๆกำลังดี ตัวเนื้อไก่เพียงแค่กัดก็รับรู้ได้ถึงความฉ่ำน้ำ น้ำจิ้มรสเด็ด ที่ไม่มีใครเหมือน รับประกันความอร่อย",
    creator: "@lungtum-khao-man-gai",
    images: ["/img/hero/bg-lungtum4.png"],
  },
  // Schema.org for Google+
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
