"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Services() {
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
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/services/air" className="block group h-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-blue-200 h-full flex flex-col">
                <div className="text-blue-600 text-5xl mb-6 text-center">💧</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Analisis Air
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Pengujian komprehensif kualitas air minum, air limbah, dan air
                  lingkungan sesuai standar nasional
                </p>
                <div className="text-center mt-auto">
                  <span className="text-blue-600 font-semibold hover:underline group-hover:text-blue-700 transition-colors">
                    Pelajari Selengkapnya →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services/udara" className="block group h-full">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-green-200 h-full flex flex-col">
                <div className="text-green-600 text-5xl mb-6 text-center">🌬️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Analisis Udara
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Pemantauan kualitas udara ambient, emisi, dan pencemaran udara
                  dengan peralatan canggih
                </p>
                <div className="text-center mt-auto">
                  <span className="text-green-600 font-semibold hover:underline group-hover:text-green-700 transition-colors">
                    Pelajari Selengkapnya →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services/lainnya" className="block group h-full">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-purple-200 h-full flex flex-col">
                <div className="text-purple-600 text-5xl mb-6 text-center">🔬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Layanan Lainnya
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Analisis tanah, limbah B3, mikrobiologi, dan konsultasi
                  lingkungan terintegrasi
                </p>
                <div className="text-center mt-auto">
                  <span className="text-purple-600 font-semibold hover:underline group-hover:text-purple-700 transition-colors">
                    Pelajari Selengkapnya →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Why Choose Us */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="text-green-600 text-xl">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Akreditasi Resmi
                  </h4>
                  <p className="text-gray-600">
                    Terakreditasi KAN dengan standar ISO/IEC 17025:2017
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="text-green-600 text-xl">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Teknologi Terdepan
                  </h4>
                  <p className="text-gray-600">
                    Peralatan canggih dan metode analisis terkini
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="text-green-600 text-xl">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Tim Profesional
                  </h4>
                  <p className="text-gray-600">
                    Analis berpengalaman dan tersertifikasi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="text-green-600 text-xl">✓</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Hasil Cepat & Akurat
                  </h4>
                  <p className="text-gray-600">
                    Laporan detail dengan turnaround time optimal
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}