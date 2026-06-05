import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentModeScript } from "@/components/cookie-consent/ConsentModeScript";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { rootLayoutMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...rootLayoutMetadata(),
  title: {
    default: `${SITE_NAME} | Expert Witness & Forensic Accounting UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sterling Forensic is a UK boutique forensic accounting practice providing expert witness reports, financial investigations, and dispute support.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full overflow-x-hidden`}
    >
      <head>
        <ConsentModeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-full min-w-[320px] flex-col overflow-x-hidden antialiased">
        <CookieConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
