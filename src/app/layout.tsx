import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'CryptoVault by Shubham Soni - Premium Decentralized Crypto Platform',
  description: 'Unlock the future of finance with CryptoVault. Securely manage, trade, and invest in digital assets with advanced features and unparalleled security.',
  keywords: ["crypto, cryptocurrency, blockchain, trading, investment, DeFi, staking, secure wallet, digital assets, Bitcoin, Ethereum"],
  openGraph: {
    "title": "CryptoVault - Premium Decentralized Crypto Platform",
    "description": "Unlock the future of finance with CryptoVault. Securely manage, trade, and invest in digital assets with advanced features and unparalleled security.",
    "url": "https://cryptovault.com",
    "siteName": "CryptoVault",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/bitcoin-gold-coin-stock-market-trading-chart-background-online-candle_169016-66268.jpg",
        "alt": "CryptoVault Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CryptoVault - Premium Decentralized Crypto Platform",
    "description": "Unlock the future of finance with CryptoVault. Securely manage, trade, and invest in digital assets with advanced features and unparalleled security.",
    "images": [
      "http://img.b2bpic.net/free-photo/bitcoin-gold-coin-stock-market-trading-chart-background-online-candle_169016-66268.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
