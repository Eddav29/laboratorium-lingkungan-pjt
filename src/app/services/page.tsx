"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEOBreadcrumb } from "@/components/seo-breadcrumb";

// This would be better as a server component for SEO, but keeping client for now
// export const metadata: Metadata = generateSEOMetadata({
//   title: 'Layanan Uji Lingkungan',
//   description: 'Layanan lengkap uji kualitas air, udara ambient, udara emisi, kebisingan, pencahayaan, dan mikrobiologi. Terakreditasi dan berpengalaman.',
//   keywords: ['layanan uji lingkungan', 'jasa testing lingkungan', 'laboratorium terakreditasi'],
//   url: '/services'
// });

export default function Services() {
  const services = [
    {
      icon: '💧',
      title: 'Pengambilan Sampel Air untuk Uji Fisika, Kimia, dan Mikrobiologi',
      description: 'Layanan pengambilan dan analisis sampel air dengan standar internasional untuk air minum, air limbah, dan air lingkungan',
      link: '/services/air',
      keywords: ['uji kualitas air', 'analisis air', 'pengujian air minum', 'uji air limbah']
    },
    {
      icon: '🌬️',
      title: 'Pengambilan Sampel Udara Ambient',
      description: 'Monitoring kualitas udara ambient dengan teknologi terdepan untuk pemantauan lingkungan',
      link: '/services/udara-ambient',
      keywords: ['udara ambient', 'kualitas udara', 'monitoring udara', 'pencemaran udara']
    },
    {
      icon: '🏭',
      title: 'Pengambilan Sampel Udara Emisi',
      description: 'Pengujian emisi industri sesuai regulasi lingkungan dan standar KLHK',
      link: '/services/udara-emisi',
      keywords: ['udara emisi', 'emisi industri', 'pengujian emisi', 'cerobong asap']
    },
    {
      icon: '📢',
      title: 'Pengambilan Sampel Kebisingan',
      description: 'Pengukuran tingkat kebisingan lingkungan dan industri',
      link: '/services/kebisingan'
    },
    {
      icon: '🏢',
      title: 'Pengambilan Sampel Udara Lingkungan Kerja',
      description: 'Monitoring kualitas udara di lingkungan kerja untuk K3',
      link: '/services/udara-lingkungan-kerja'
    },
    {
      icon: '🔬',
      title: 'Pengambilan Sample Mikrobiologi',
      description: 'Analisis mikrobiologi untuk berbagai keperluan',
      link: '/services/mikrobiologi'
    },
    {
      icon: '☀️',
      title: 'Pengambilan Sample Pencahayaan',
      description: 'Pengukuran intensitas cahaya di lingkungan kerja untuk keselamatan dan kesehatan kerja',
      link: '/services/pencahayaan',
      keywords: ['pengukuran pencahayaan', 'intensitas cahaya', 'K3', 'lingkungan kerja']
    }
  ];

  // Structured data for services
  const servicesStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Laboratorium Lingkungan PJT',
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'}/services`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Uji Lingkungan',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        name: service.title,
        description: service.description,
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://laboratorium-pjt.com'}${service.link}`,
        category: 'Environmental Testing Services'
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <SEOBreadcrumb className="text-blue-100" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Layanan{" "}
              <span className="text-blue-300">Profesional</span> Kami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Solusi lengkap analisis lingkungan dengan standar internasional dan
              teknologi terdepan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-block">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Jelajahi Layanan
                </button>
              </Link>
              <Link href="/contact" className="inline-block">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                  Konsultasi Gratis
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 md:h-20"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan analisis lingkungan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 auto-rows-fr">
            {services.map((service, index) => (
              <div key={index} className={`${index === 6 ? 'md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:col-start-2' : ''}`}>
                <Link href={service.link} className="block w-full h-full">
                  <Card 
                    className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white hover:bg-blue-600 border border-gray-200 overflow-hidden cursor-pointer h-full ${
                      index === 6 ? 'md:max-w-sm lg:max-w-none' : ''
                    }`}
                  >
                  <CardContent className="p-8 relative h-full flex flex-col">
                    {/* Konten utama - hilang saat hover */}
                    <div className="transition-opacity duration-300 group-hover:opacity-0 flex flex-col flex-1">
                      <div className="text-4xl mb-4">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 flex-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Tombol "Lihat Selengkapnya" - muncul saat hover, di tengah card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-4">
                          {service.icon}
                        </div>
                        <div className="font-semibold text-lg mb-4 flex items-center">
                          <span>Lihat Selengkapnya</span>
                          <svg 
                            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}