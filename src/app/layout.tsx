import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Clash app",
  description: "Versuss battle between your thought",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
