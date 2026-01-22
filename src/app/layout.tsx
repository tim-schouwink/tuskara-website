import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuskara - Interior Customization",
  description: "A fusion of earth and cosmos, Tuskara symbolizes the meeting point between raw natural beauty and the infinite unknown.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/made-okine-sans"
          rel="stylesheet"
        />
      </head>
      <body className="font-okine antialiased h-full">
        {children}
      </body>
    </html>
  );
}
