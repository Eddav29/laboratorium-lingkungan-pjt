"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: '💧',
      title: 'Pengambilan Sampel Air untuk Uji Fisika, Kimia, dan Mikrobiologi',
      description: 'Layanan pengambilan dan analisis sampel air dengan standar internasional',
    },
    {
      icon: '🌬️',
      title: 'Pengambilan Sampel Udara Ambient',
      description: 'Monitoring kualitas udara ambient dengan teknologi terdepan'
    },
    {
      icon: '🏭',
      title: 'Pengambilan Sampel Udara Emisi',
      description: 'Pengujian emisi industri sesuai regulasi lingkungan'
    },
    {
      icon: '📢',
      title: 'Pengambilan Sampel Kebisingan',
      description: 'Pengukuran tingkat kebisingan lingkungan dan industri'
    },
    {
      icon: '🏢',
      title: 'Pengambilan Sampel Udara Lingkungan Kerja',
      description: 'Monitoring kualitas udara di lingkungan kerja untuk K3'
    },
    {
      icon: '🔬',
      title: 'Pengambilan Sample Mikrobiologi',
      description: 'Analisis mikrobiologi untuk berbagai keperluan'
    },
    {
      icon: '☀️',
      title: 'Pengambilan Sample Pencahayaan',
      description: 'Pengukuran intensitas cahaya di lingkungan kerja'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
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
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white hover:bg-blue-600 border border-gray-200 overflow-hidden cursor-pointer ${
                  index === 6 ? 'md:col-start-2 lg:col-start-2' : ''
                }`}
              >
                <CardContent className="p-8 relative">
                  {/* Konten utama - hilang saat hover */}
                  <div className="transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}