import "./global.css";
import { Space_Grotesk } from 'next/font/google';
import { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: `My Portfolio`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
