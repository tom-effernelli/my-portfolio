import "./global.css";
import { Inter, Space_Grotesk } from 'next/font/google';
import { ReactNode } from "react";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: `Tom Effernelli - Developer`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
