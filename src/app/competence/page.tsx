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
          animate="visible"
          variants={staggerContainer}
          transition={{ duration: 0.8 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl"></div>
          
          <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <div className="w-full">
              <motion.div 
                className="text-center mb-16"
                variants={fadeInUp}
                transition={{ delay: 0.8, duration: 0.8 }}
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

              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
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
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-all duration-300">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Pemantauan Air Permukaan & Limbah</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan sistematis kualitas air sungai dan air limbah dengan pengambilan sampel yang mengikuti standar nasional dan internasional.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-all duration-300">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Analisis Laboratorium Terakreditasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Analisis parameter fisika, kimia, dan biologi air menggunakan peralatan canggih dengan metode terakreditasi untuk hasil yang akurat.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-all duration-300">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
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
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Kompetensi Bidang Non-Air */}
        <motion.section 
          className="py-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, rgba(97, 234, 188, 0.05) 50%, #ffffff 100%)'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{
            background: 'linear-gradient(135deg, rgba(97, 234, 188, 0.2), rgba(31, 111, 244, 0.2))'
          }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full blur-2xl" style={{
            background: 'linear-gradient(135deg, rgba(31, 111, 244, 0.3), rgba(97, 234, 188, 0.1))'
          }}></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                variants={fadeInUp}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{
                  backgroundColor: 'rgba(97, 234, 188, 0.1)',
                  color: '#1f6ff4'
                }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)'
                  }}></div>
                  Environmental Excellence
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Kompetensi Bidang <span style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Non-Air</span>
                </h2>
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="w-12 h-1 rounded-full" style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)'
                  }}></div>
                  <div className="w-3 h-3 rounded-full" style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)'
                  }}></div>
                  <div className="w-12 h-1 rounded-full" style={{
                    background: 'linear-gradient(135deg, #1f6ff4, #61eabc)'
                  }}></div>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Solusi komprehensif untuk <span className="font-bold" style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>monitoring lingkungan</span> udara, tanah, dan kebisingan dengan teknologi terdepan
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(31,111,244,0.1) 50%, transparent 100%)'
                    }}></div>
                    
                    {/* Floating stats card */}
                    <motion.div 
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md border border-white/20 w-3/4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <div className="flex justify-center items-center text-center gap-6">
                        <div className="flex-1">
                          <div className="text-sm font-bold" style={{color: '#1f6ff4'}}>8+</div>
                          <div className="text-xs text-gray-600">Bidang</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold" style={{color: '#1f6ff4'}}>24/7</div>
                          <div className="text-xs text-gray-600">Service</div>
                        </div>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <div className="flex-1">
                          <div className="text-sm font-bold" style={{color: '#1f6ff4'}}>ISO</div>
                          <div className="text-xs text-gray-600">Certified</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full opacity-70" style={{
                    background: 'linear-gradient(135deg, #61eabc, #1f6ff4)'
                  }}></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full opacity-60" style={{
                    background: 'linear-gradient(135deg, #1f6ff4, #61eabc)'
                  }}></div>
                </motion.div>

                {/* Content with enhanced styling */}
                <motion.div 
                  className="space-y-8 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[rgba(97,234,188,0.05)] hover:to-[rgba(31,111,244,0.05)]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300" style={{
                        backgroundColor: 'rgba(97, 234, 188, 0.1)'
                      }}>
                        <svg className="w-4 h-4" style={{color: '#1f6ff4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Monitoring Udara Ambient</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan kualitas udara ambient untuk mendeteksi polutan seperti PM2.5, PM10, SO2, NO2, CO, dan Ozon dengan teknologi real-time.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[rgba(97,234,188,0.05)] hover:to-[rgba(31,111,244,0.05)]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300" style={{
                        backgroundColor: 'rgba(97, 234, 188, 0.1)'
                      }}>
                        <svg className="w-4 h-4" style={{color: '#1f6ff4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Analisis Lingkungan Kerja</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Evaluasi kondisi lingkungan kerja termasuk kualitas udara, kebisingan, pencahayaan, dan faktor ergonomi untuk K3 optimal.
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[rgba(97,234,188,0.05)] hover:to-[rgba(31,111,244,0.05)]">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300" style={{
                        backgroundColor: 'rgba(97, 234, 188, 0.1)'
                      }}>
                        <svg className="w-4 h-4" style={{color: '#1f6ff4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">Sampling & Instrumentasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Penggunaan peralatan sampling dan instrumentasi canggih untuk pengukuran real-time dan sampling manual dengan akurasi tinggi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="relative p-8 rounded-3xl shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, rgba(97, 234, 188, 0.08) 0%, rgba(31, 111, 244, 0.08) 100%)',
                      border: '1px solid rgba(97, 234, 188, 0.2)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full blur-xl" style={{
                      background: 'linear-gradient(135deg, rgba(97, 234, 188, 0.3), rgba(31, 111, 244, 0.2))'
                    }}></div>
                    <h4 className="font-bold mb-4 text-lg flex items-center gap-2" style={{color: '#1f6ff4'}}>
                      <span className="w-2 h-2 rounded-full" style={{
                        background: 'linear-gradient(135deg, #61eabc, #1f6ff4)'
                      }}></span>
                      Parameter Monitoring
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      {['PM2.5', 'PM10', 'SO2', 'NO2', 'CO', 'O3', 'H2S', 'NH3', 'Kebisingan', 'Getaran', 'Pencahayaan', 'Iklim Kerja'].map((param, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/70 rounded-full text-center font-medium" style={{
                          color: '#1f6ff4',
                          border: '1px solid rgba(97, 234, 188, 0.3)'
                        }}>
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