import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/assets/logo/logo.png`
  
  const seoTitle = title 
    ? `${title} | Laboratorium Lingkungan PJT`
    : 'Laboratorium Lingkungan PJT - Jasa Uji Lingkungan Terpercaya'
  
  const seoDescription = description || 
    'Laboratorium Lingkungan PJT menyediakan layanan uji kualitas air, udara, mikrobiologi, kebisingan, dan pencahayaan dengan standar nasional. Akreditasi resmi untuk hasil yang akurat dan terpercaya.'
  
  const allKeywords = [
    'laboratorium lingkungan',
    'uji kualitas air',
    'uji udara ambient',
    'uji mikrobiologi',
    'uji kebisingan',
    'uji pencahayaan',
    'laboratorium terakreditasi',
    'jasa uji lingkungan',
    ...keywords
  ]

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    robots: noIndex ? {
      index: false,
      follow: false
    } : {
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
      type,
      locale: 'id_ID',
      url: fullUrl,
      siteName: 'Laboratorium Lingkungan PJT',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'Laboratorium Lingkungan PJT',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage],
      creator: '@laboratorium_pjt',
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Structured data helpers
export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Laboratorium Lingkungan PJT',
    url: baseUrl,
    logo: `${baseUrl}/assets/logo/logo.png`,
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
    }
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${baseUrl}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: 'Laboratorium Lingkungan PJT',
      url: baseUrl
    },
    areaServed: 'Indonesia',
    serviceType: 'Environmental Testing',
    ...(service.image && { image: `${baseUrl}${service.image}` })
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  }
}
