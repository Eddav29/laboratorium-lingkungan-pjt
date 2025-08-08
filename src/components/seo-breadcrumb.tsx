'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface SEOBreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function SEOBreadcrumb({ items, className = '' }: SEOBreadcrumbProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumbs if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname)
  
  if (breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <>
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
      >
        <Link 
          href="/" 
          className="flex items-center hover:text-blue-600 transition-colors"
          aria-label="Home"
        >
          <Home size={16} />
        </Link>
        
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-1">
            <ChevronRight size={16} className="text-gray-400" />
            {index === breadcrumbItems.length - 1 ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      {/* Structured Data */}
      <BreadcrumbStructuredData items={breadcrumbItems} />
    </>
  )
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []
  
  // Map of path segments to human-readable labels
  const labelMap: Record<string, string> = {
    'services': 'Layanan',
    'about': 'Tentang Kami',
    'contact': 'Kontak',
    'competence': 'Kompetensi',
    'air': 'Uji Kualitas Air',
    'kebisingan': 'Uji Kebisingan',
    'mikrobiologi': 'Uji Mikrobiologi',
    'pencahayaan': 'Uji Pencahayaan',
    'udara-ambient': 'Uji Udara Ambient',
    'udara-emisi': 'Uji Udara Emisi',
    'udara-lingkungan-kerja': 'Uji Udara Lingkungan Kerja',
    'peralatan': 'Peralatan',
    'portofolio': 'Portofolio'
  }
  
  let currentPath = ''
  
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    breadcrumbs.push({
      label,
      href: currentPath
    })
  })
  
  return breadcrumbs
}

// Structured data component for breadcrumbs
function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`
      }))
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
