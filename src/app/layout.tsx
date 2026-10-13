import type { Metadata } from "next";
import "@fontsource-variable/oswald/wght.css";
import "@fontsource-variable/montserrat/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lexora of Singapore | Official Website",
  description:
    "Lexora of Singapore – become an affiliate and explore our statutory functions, legal support, news and 60th anniversary celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
