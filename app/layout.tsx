import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentModeScript } from "@/components/cookie-consent/ConsentModeScript";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { rootLayoutMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site-config";
import "./globals.css";

export const dynamic = "force-dynamic";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...rootLayoutMetadata(),
  title: {
    default: `${SITE_NAME} | Expert Witness & Forensic Accounting UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sterling Forensic is a United Kingdom boutique forensic accounting practice providing expert witness reports, disputes, valuations, shareholder disputes, and loss and damages quantification across England and Wales.",
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
      className={`${fraunces.variable} ${workSans.variable} h-full overflow-x-hidden`}
    >
      <head>
        <ConsentModeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-full min-w-[320px] flex-col overflow-x-hidden antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-surface focus:px-4 focus:py-2 focus:text-primary focus:shadow-card"
        >
          Skip to main content
        </a>
        <CookieConsentProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
