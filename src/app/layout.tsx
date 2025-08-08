import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "Laboratorium Lingkungan PJT - Jasa Uji Lingkungan Terpercaya",
    template: "%s | Laboratorium Lingkungan PJT"
  },
  description: "Laboratorium Lingkungan PJT menyediakan layanan uji kualitas air, udara, mikrobiologi, kebisingan, dan pencahayaan dengan standar nasional. Akreditasi resmi untuk hasil yang akurat dan terpercaya.",
  keywords: [
    "laboratorium lingkungan",
    "uji kualitas air",
    "uji udara ambient",
    "uji mikrobiologi",
    "uji kebisingan",
    "uji pencahayaan",
    "laboratorium terakreditasi",
    "jasa uji lingkungan",
    "analisis lingkungan",
    "sertifikat uji lingkungan",
    "laboratorium PJT",
    "environmental testing"
  ],
  authors: [{ name: "Laboratorium Lingkungan PJT" }],
  creator: "Laboratorium Lingkungan PJT",
  publisher: "Laboratorium Lingkungan PJT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com',
    siteName: 'Laboratorium Lingkungan PJT',
    title: 'Laboratorium Lingkungan PJT - Jasa Uji Lingkungan Terpercaya',
    description: 'Laboratorium Lingkungan PJT menyediakan layanan uji kualitas air, udara, mikrobiologi, kebisingan, dan pencahayaan dengan standar nasional. Akreditasi resmi untuk hasil yang akurat dan terpercaya.',
    images: [
      {
        url: '/assets/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Laboratorium Lingkungan PJT Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laboratorium Lingkungan PJT - Jasa Uji Lingkungan Terpercaya',
    description: 'Laboratorium Lingkungan PJT menyediakan layanan uji kualitas air, udara, mikrobiologi, kebisingan, dan pencahayaan dengan standar nasional.',
    images: ['/assets/logo/logo.png'],
    creator: '@laboratorium_pjt',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com',
    languages: {
      'id-ID': '/',
      'en-US': '/en',
    },
  },
  category: 'Environmental Testing Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Laboratorium Lingkungan PJT',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com',
    logo: `${process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'}/assets/logo/logo.png`,
    description: 'Laboratorium Lingkungan PJT menyediakan layanan uji kualitas air, udara, mikrobiologi, kebisingan, dan pencahayaan dengan standar nasional.',
    serviceType: [
      'Environmental Testing',
      'Water Quality Testing',
      'Air Quality Testing',
      'Microbiological Testing',
      'Noise Level Testing',
      'Lighting Testing'
    ],
    areaServed: 'Indonesia',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-xxx-xxxx-xxxx',
      contactType: 'Customer Service',
      availableLanguage: ['Indonesian', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta'
    },
    sameAs: [
      'https://www.facebook.com/laboratorium.pjt',
      'https://www.instagram.com/laboratorium.pjt',
      'https://www.linkedin.com/company/laboratorium-pjt'
    ]
  };

  return (
    <html lang="id">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lab PJT" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
