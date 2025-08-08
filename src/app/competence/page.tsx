"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Competence() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 pb-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-300/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/25 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-indigo-400/40 rounded-full animate-pulse"></div>
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <span className="text-blue-100 font-medium">Excellence in Environmental Analysis</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Kompetensi & Keahlian
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl mb-10 text-blue-100 font-light leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pengalaman <span className="text-yellow-300 font-semibold">Puluhan Tahun</span> dalam<br />
              Pemantauan dan Analisis Lingkungan
            </motion.p>
            
            <motion.div 
              className="flex justify-center items-center space-x-4"
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative bg-gradient-to-b from-white via-gray-50/30 to-white">
        {/* Decorative separator */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-800/5 to-transparent"></div>
        {/* Kompetensi Bidang Air */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Water Quality Expertise
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Kompetensi Bidang <span className="text-blue-600">Air</span>
                </h2>
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Lebih dari <span className="font-bold text-blue-600">30 tahun pengalaman</span> dalam pemantauan kualitas air permukaan dan air limbah dengan standar internasional
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image with enhanced styling */}
                <motion.div 
                  className="relative order-2 lg:order-1"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/images/lab.png"
                      alt="Laboratorium Analisis Air"
                      fill
                      className="object-cover"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-600/20 to-transparent"></div>
                    
                    {/* Floating stats card */}
                    <motion.div 
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md border border-white/20 w-3/4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <div className="flex justify-center items-center text-center gap-6">
                        <div className="flex-1">
                          <div className="text-sm font-bold text-blue-600">30+</div>
                          <div className="text-xs text-gray-600">Tahun</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-blue-600">59+</div>
                          <div className="text-xs text-gray-600">Titik</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-blue-600">100%</div>
                          <div className="text-xs text-gray-600">Akreditasi</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-indigo-500 rounded-full opacity-60"></div>
                </motion.div>

                {/* Content with enhanced styling */}
                <motion.div 
                  className="space-y-8 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Pemantauan Air Permukaan & Limbah</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan sistematis kualitas air sungai dan air limbah dengan pengambilan sampel yang mengikuti standar nasional dan internasional.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Analisis Laboratorium Terakreditasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Analisis parameter fisika, kimia, dan biologi air menggunakan peralatan canggih dengan metode terakreditasi untuk hasil yang akurat.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Monitoring Multi-Lokasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan rutin di 59+ titik lokasi baik di WS Brantas maupun luar WS dengan frekuensi dua mingguan hingga triwulanan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                    <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Parameter Unggulan
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      {['pH', 'DO', 'BOD', 'COD', 'TSS', 'Nitrat', 'Nitrit', 'Amoniak', 'Fosfat', 'Logam Berat', 'Pestisida', 'Mikrobiologi'].map((param, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/70 text-blue-700 rounded-full text-center font-medium border border-blue-200/50">
                          {param}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Kompetensi Bidang Non-Air */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  Environmental Excellence
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Kompetensi Bidang <span className="text-purple-600">Non-Air</span>
                </h2>
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Solusi komprehensif untuk <span className="font-bold text-purple-600">monitoring lingkungan</span> udara, tanah, dan kebisingan dengan teknologi terdepan
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image with enhanced styling */}
                <motion.div 
                  className="relative order-2 lg:order-1"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/images/nonair.jpg"
                      alt="Monitoring Kualitas Udara"
                      fill
                      className="object-cover"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-600/20 to-transparent"></div>
                    
                    {/* Floating stats card */}
                    <motion.div 
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md border border-white/20 w-3/4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <div className="flex justify-center items-center text-center gap-6">
                        <div className="flex-1">
                          <div className="text-sm font-bold text-purple-600">8+</div>
                          <div className="text-xs text-gray-600">Bidang</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-purple-600">24/7</div>
                          <div className="text-xs text-gray-600">Service</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-purple-600">ISO</div>
                          <div className="text-xs text-gray-600">Certified</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full opacity-60"></div>
                </motion.div>

                {/* Content with enhanced styling */}
                <motion.div 
                  className="space-y-8 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-purple-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">Monitoring Udara Ambient</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan kualitas udara ambient untuk mendeteksi polutan seperti PM2.5, PM10, SO2, NO2, CO, dan Ozon dengan teknologi real-time.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-purple-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">Analisis Lingkungan Kerja</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Evaluasi kondisi lingkungan kerja termasuk kualitas udara, kebisingan, pencahayaan, dan faktor ergonomi untuk K3 optimal.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-purple-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">Sampling & Instrumentasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Penggunaan peralatan sampling dan instrumentasi canggih untuk pengukuran real-time dan sampling manual dengan akurasi tinggi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="relative bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-100 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="absolute top-4 right-4 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"></div>
                    <h4 className="font-bold text-purple-800 mb-4 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Parameter Monitoring
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      {['PM2.5', 'PM10', 'SO2', 'NO2', 'CO', 'O3', 'H2S', 'NH3', 'Kebisingan', 'Getaran', 'Pencahayaan', 'Iklim Kerja'].map((param, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/70 text-purple-700 rounded-full text-center font-medium border border-purple-200/50">
                          {param}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}