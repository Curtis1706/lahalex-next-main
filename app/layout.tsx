import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "LAHALEX - Centralisez le droit, Simplifiez la justice",
  description: "Plateforme juridique innovante pour juristes, avocats, notaires et commissaires de justice",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background: linear-gradient(135deg, #770d28 0%, #5a0a1f 100%);
              color: #FAF5EF;
              margin: 0;
              padding: 0;
            }
            * { 
              box-sizing: border-box;
            }
          `
        }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
