import "./global.css";

import { ReactNode } from "react";

export const metadata = {
  title: `My Portfolio`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
