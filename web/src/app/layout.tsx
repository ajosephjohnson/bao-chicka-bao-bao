import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { client } from "../sanity/lib/client";
import { defineQuery } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const builder = imageUrlBuilder(client);

const BRAND_QUERY = defineQuery(`*[_type == "brand"][0]{
  logo,
  restaurantName
}`);

async function getBrandData() {
  return await client.fetch(BRAND_QUERY);
}

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getBrandData();
  return {
    title: brand?.restaurantName ?? "",
    description: `Welcome to ${brand?.restaurantName ?? ""}`,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brand = await getBrandData();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-center items-center flex-col p-4 border-b">
          {brand?.logo && (
            <Image
              src={builder.image(brand.logo).width(50).height(50).url()}
              alt={brand?.restaurantName ?? "Restaurant logo"}
              width={50}
              height={50}
              className="object-contain"
            />
          )}
          {brand?.restaurantName && (
            <h1 className="text-xl font-semibold">{brand.restaurantName}</h1>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}
