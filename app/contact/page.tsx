import type { Metadata } from "next"

import { ContactPage } from "@/components/contact/contact-page"
import { siteUrl } from "@/lib/content/site"

const description =
  "Get in touch with Prasad Kapure about full-stack, Web3, and smart contract engineering roles, freelance work, or anything he has built."

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact | Prasad Kapure",
    description,
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Prasad Kapure",
    description,
  },
}

export default function Page() {
  return <ContactPage />
}