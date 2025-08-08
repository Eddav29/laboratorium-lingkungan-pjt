"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Kebisingan() {
  const parameters = [
    "Leq (Level Equivalent)",
    "L10 (Level 10 Percentile)",
    "L50 (Level 50 Percentile)",
    "L90 (Level 90 Percentile)",
    "Lmax (Level Maximum)",
    "Lmin (Level Minimum)",
    "TNI (Traffic Noise Index)",
    "NPL (Noise Pollution Level)",
    "SEL (Sound Exposure Level)",
    "Analisis Spektrum Frekuensi",
    "Background Noise",
    "Ambient Noise Level"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">📢</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pengambilan Sampel{" "}
              <span className="text-blue-300">Kebisingan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Pengukuran tingkat kebisingan lingkungan dan industri
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
                    Pengukuran kebisingan merupakan proses evaluasi tingkat suara di lingkungan 
                    untuk memastikan kesesuaian dengan baku mutu kebisingan yang ditetapkan. 
                    Layanan ini penting untuk melindungi kesehatan dan kenyamanan masyarakat 
                    dari paparan kebisingan berlebihan.
                  </p>
                  <p>
                    Pengukuran dilakukan menggunakan sound level meter yang terkalibrasi dengan 
                    metode yang sesuai standar internasional untuk mendapatkan data akurat 
                    tentang tingkat kebisingan di berbagai kondisi waktu dan lokasi.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Pengukuran Kebisingan"
                  width={600}
                  height={400}
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
                Butuh Layanan Pengukuran Kebisingan?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Tim ahli kami siap membantu Anda dalam pengukuran tingkat kebisingan 
                sesuai dengan standar yang berlaku.
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