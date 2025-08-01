"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UdaraLingkunganKerja() {
  const parameters = [
    "Debu Total (Total Dust)",
    "Debu Respirable",
    "Silika Kristal",
    "Asbes",
    "Uap Logam (Metal Fumes)",
    "Gas Beracun (H2S, CO, SO2)",
    "Uap Pelarut Organik",
    "Formaldehyde",
    "Benzene",
    "Toluene",
    "Xylene",
    "Ammonia (NH3)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">🏢</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pengambilan Sampel{" "}
              <span className="text-blue-300">Udara Lingkungan Kerja</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Monitoring kualitas udara di lingkungan kerja untuk K3
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Konsultasi Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tentang Layanan Ini
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Pengambilan sampel udara lingkungan kerja merupakan bagian penting dari 
                    program Keselamatan dan Kesehatan Kerja (K3) untuk memastikan bahwa 
                    kualitas udara di tempat kerja aman bagi pekerja dan memenuhi standar 
                    Nilai Ambang Batas (NAB) yang ditetapkan.
                  </p>
                  <p>
                    Pengambilan sampel dilakukan dengan metode personal sampling dan area 
                    sampling menggunakan peralatan yang sesuai untuk setiap jenis kontaminan 
                    udara di tempat kerja, guna melindungi kesehatan pekerja dari paparan 
                    zat berbahaya.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Pengambilan Sampel Udara Lingkungan Kerja" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Parameters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Daftar Parameter
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {parameters.map((parameter, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{parameter}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Butuh Layanan Monitoring Udara Lingkungan Kerja?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Tim ahli kami siap membantu Anda dalam monitoring kualitas udara lingkungan kerja 
                untuk memastikan K3 di tempat kerja Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Hubungi Kami
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                    Lihat Layanan Lain
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}