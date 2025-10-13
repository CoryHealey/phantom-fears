import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rushFont = localFont({
  src: "../public/fonts/GraceUnderPressure.ttf"
})

export const metadata: Metadata = {
  title: "Phantom Fears",
  description: "Crushin' MN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rushFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
