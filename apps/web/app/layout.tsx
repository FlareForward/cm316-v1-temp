import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'CM316 Chess',
  description: 'Play chess online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
