"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Equipment {
  id: number;
  name: string;
  image: string;
  category: string;
}

const equipments: Equipment[] = [
  {
    id: 1,
    name: "Air Flow Meter",
    image: "/assets/tools/airflowmeter.jpeg",
    category: "Pengukuran Udara"
  },
  {
    id: 2,
    name: "Anak Timbangan",
    image: "/assets/tools/anaktimbangan.jpeg",
    category: "Kalibrasi"
  },
  {
    id: 3,
    name: "Autoclave",
    image: "/assets/tools/autoclave.jpeg",
    category: "Sterilisasi"
  },
  {
    id: 4,
    name: "Chlorine Meter",
    image: "/assets/tools/chlorinemeter.jpeg",
    category: "Pengukuran Kimia"
  },
  {
    id: 5,
    name: "Conductivity Meter",
    image: "/assets/tools/conductivitymeter.jpeg",
    category: "Pengukuran"
  },
  {
    id: 6,
    name: "DO Meter",
    image: "/assets/tools/dometer.jpeg",
    category: "Pengukuran"
  },
  {
    id: 7,
    name: "Glass Thermometer",
    image: "/assets/tools/glassthermometer.jpeg",
    category: "Pengukuran Suhu"
  },
  {
    id: 8,
    name: "Hot Plate",
    image: "/assets/tools/hotplate.jpeg",
    category: "Pemanasan"
  },
  {
    id: 9,
    name: "BOD Incubator",
    image: "/assets/tools/incubatorbod.jpeg",
    category: "Inkubasi"
  },
  {
    id: 10,
    name: "Incubator Mikrobiologi",
    image: "/assets/tools/inkubatormikrobiologi.jpeg",
    category: "Mikrobiologi"
  },
  {
    id: 11,
    name: "Laminar Air Flow",
    image: "/assets/tools/laminarairflow.jpeg",
    category: "Sterilisasi"
  },
  {
    id: 12,
    name: "Muffle Furnace",
    image: "/assets/tools/muflefurnance.jpeg",
    category: "Pemanasan"
  }
];

export default function PeralatanPage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 pt-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 translate-y-16"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-50"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Peralatan Pendukung
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Teknologi canggih dan sistem terintegrasi untuk mendukung akurasi analisis lingkungan yang terpercaya
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">ISO 17025</div>
                  <p className="text-blue-100 text-sm">Standar Internasional</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <p className="text-blue-100 text-sm">Real-time Monitoring</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <p className="text-blue-100 text-sm">Kalibrasi Rutin</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Left Content */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Mengapa Teknologi Kami Berbeda?
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Kombinasi peralatan laboratorium berstandar internasional dengan sistem digital 
                    yang terintegrasi memberikan hasil analisis yang akurat dan dapat diandalkan.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-3 rounded-lg mr-4 mt-1 backdrop-blur-sm">
                      <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Akreditasi & Kalibrasi</h3>
                      <p className="text-blue-100">Semua peralatan memenuhi standar ISO 17025 dan dikalibrasi secara rutin untuk menjamin akurasi hasil pengujian yang konsisten.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4 mt-1 backdrop-blur-sm">
                      <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Investasi Berkelanjutan</h3>
                      <p className="text-blue-100">Pembaruan teknologi secara berkala untuk mendukung analisis lingkungan yang komprehensif dan mengikuti perkembangan terkini.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4 mt-1 backdrop-blur-sm">
                      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Integrasi Digital</h3>
                      <p className="text-blue-100">Sistem manajemen data terintegrasi untuk efisiensi operasional dan tracking kualitas secara real-time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - SIMONA Highlight */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mr-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">SIMONA</h3>
                        <p className="text-blue-100 font-medium">Sistem Informasi Monitoring & Analisa</p>
                      </div>
                    </div>
                    
                    <p className="text-white mb-6 leading-relaxed text-lg">
                      Platform digital terdepan yang mengintegrasikan seluruh proses laboratorium - 
                      dari pengolahan data, pelaporan hasil, hingga manajemen kualitas secara real-time.
                    </p>
                    
                    {/* Feature Pills */}
                    <div className="space-y-3">
                      <div className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="font-medium">Real-time Data Processing</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="font-medium">Automated Quality Control</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="font-medium">Integrated Reporting System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Equipment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Galeri Peralatan Laboratorium
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Koleksi peralatan laboratorium modern untuk mendukung berbagai jenis analisis lingkungan
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {equipments.map((equipment, index) => (
                <motion.div
                  key={equipment.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  {/* Equipment Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300" />
                    
                    {/* Equipment Name on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-center text-white px-4">
                        <h3 className="text-lg font-bold mb-2 transform Qtranslate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {equipment.name}
                        </h3>
                        <span className="text-sm bg-blue-500 px-3 py-1 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          {equipment.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-gray-600 mb-6">
                Ingin mengetahui lebih detail tentang spesifikasi peralatan kami?
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Hubungi Kami
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}