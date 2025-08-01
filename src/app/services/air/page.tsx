"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AnalisisAir() {
  const parameters = [
    "pH (Derajat Keasaman)",
    "TDS (Total Dissolved Solids)",
    "TSS (Total Suspended Solids)",
    "Turbidity (Kekeruhan)",
    "DO (Dissolved Oxygen)",
    "BOD (Biochemical Oxygen Demand)",
    "COD (Chemical Oxygen Demand)",
    "Ammonia (NH3-N)",
    "Nitrit (NO2-N)",
    "Nitrat (NO3-N)",
    "Sulfat (SO4)",
    "Chlorida (Cl)",
    "Fluorida (F)",
    "Sianida (CN)",
    "Deterjen/MBAS",
    "Minyak dan Lemak",
    "Fenol",
    "Logam Berat (Pb, Cd, Cr, Cu, Zn, dll)",
    "Pestisida",
    "Bakteri Coliform",
    "E. coli"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">💧</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Analisis{" "}
              <span className="text-blue-300">Kualitas Air</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Pengujian komprehensif untuk memastikan kualitas air sesuai standar
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Layanan Analisis Kualitas Air
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami menyediakan layanan analisis kualitas air yang komprehensif untuk berbagai keperluan 
                seperti air minum, air limbah, air sungai, air tanah, dan air laut. Analisis dilakukan 
                dengan metode standar nasional dan internasional untuk memastikan akurasi hasil.
              </p>
            </div>

            {/* Parameters Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Parameter yang Dianalisis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {parameters.map((param, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="text-gray-700 font-medium">{param}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mengapa Pilih Layanan Kami?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Laboratorium terakreditasi KAN
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Metode analisis standar SNI & internasional
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Peralatan modern dan terkalibrasi
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Tenaga ahli berpengalaman
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Hasil cepat dan akurat
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Jenis Sampel Air
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Air minum/PDAM
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Air sumur/air tanah
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Air sungai/danau
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Air limbah industri
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Air laut
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Butuh Analisis Kualitas Air?
              </h3>
              <p className="text-gray-600 mb-6">
                Hubungi kami untuk konsultasi dan penawaran khusus
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Hubungi Kami Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}