import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { Pixelify_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { UiFeedbackProvider } from "@/hooks/use-ui-feedback"
import { MotionProvider } from "@/components/common/motion-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll"
import { UserCursor } from "@/components/common/user-cursor"
import { SiteShell } from "@/components/layout/site-shell"
import StructuredData from "@/components/structured-data"
import { siteUrl } from "@/lib/content/site"

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
})

const description =
  "Blockchain Developer specializing in smart contracts, DeFi applications, and multi-chain Web3 products across Ethereum, Solana, Polygon, Cardano, Base, Casper, and Stellar ecosystems."

const ogImage = "https://freeimage.host/i/prasad-portfolio.f1C7zKl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prasad Kapure - Blockchain Developer | Portfolio",
    template: "%s | Prasad Kapure",
  },
  description,
  keywords: [
    "Blockchain Developer",
    "Smart Contract Engineer",
    "Web3 Developer",
    "DeFi Developer",
    "Solidity Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Ethereum Developer",
    "Solana Developer",
    "Polygon Developer",
    "Portfolio",
    "India",
    "Prasad Kapure",
    "Blockchain Engineer",
    "Full-Stack Web3 Developer",
  ],
  authors: [{ name: "Prasad Kapure" }],
  creator: "Prasad Kapure",
  publisher: "Prasad Kapure",
  generator: "Next.js",
  applicationName: "Prasad Kapure Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prasad Kapure Portfolio",
    title: "Prasad Kapure - Blockchain Developer",
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Prasad Kapure - Blockchain Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrasadKapure5",
    creator: "@PrasadKapure5",
    title: "Prasad Kapure - Blockchain Developer",
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon?v=3",
    shortcut: "/favicon?v=3",
    apple: "/favicon?v=3",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "prasadkapure553@gmail.com",
    "contact:phone_number": "+91-9657584288",
    "contact:country_name": "India",
    "contact:region": "Maharashtra",
    "contact:locality": "Pune",
    "twitter:domain": "prasadkapure.dev",
    "twitter:url": siteUrl,
    "twitter:image:alt": "Prasad Kapure - Blockchain Developer Portfolio",
    "whatsapp:image": ogImage,
    "whatsapp:title": "Prasad Kapure - Blockchain Developer",
    "whatsapp:description": description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistMono.variable} ${pixelifySans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=satoshi@variable&display=swap"
        />
        <StructuredData />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MotionProvider>
              <UiFeedbackProvider>
                <LenisSmoothScroll />
                <UserCursor name="hi" />
                <SiteShell>{children}</SiteShell>
              </UiFeedbackProvider>
            </MotionProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
