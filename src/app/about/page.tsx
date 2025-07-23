"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, useInView } from "framer-motion";

export default function About() {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  // Handle scroll to section on page load
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 120; // Offset untuk header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Delay untuk memastikan DOM sudah loaded
    const timer = setTimeout(handleScrollToSection, 100);
    
    // Listen untuk hash changes
    window.addEventListener('hashchange', handleScrollToSection);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  // Partner logos data
  const partnerLogos = [
    { name: "BUMN", src: "/assets/company_logos/logo_bumn.png" },
    { name: "ELHKPN", src: "/assets/company_logos/logo_elhkpn.png" },
    { name: "JTE", src: "/assets/company_logos/logo_jte.png" },
    { name: "KNIBB", src: "/assets/company_logos/logo_knibb.webp" },
    { name: "PUPR", src: "/assets/company_logos/logo_pupr.png" },
    { name: "Himpunan", src: "/assets/company_logos/logo-himpunan.png" }
  ];

  // Timeline data
  const timelineData = {
    "1986": {
      title: "Kompetensi Air Sungai",
      description: "Memulai perjalanan dengan fokus pada analisis kualitas air sungai. Laboratorium mulai memberikan layanan pemantauan dan evaluasi kualitas air untuk keperluan industri dan pemerintahan."
    },
    "2004": {
      title: "Kompetensi Air Sungai dan Air Limbah",
      description: "Mengembangkan kemampuan analisis air limbah untuk mendukung program pengendalian pencemaran air. Sertifikasi dan akreditasi nasional mulai diperoleh."
    },
    "2009": {
      title: "Kompetensi Air Sungai & Air Limbah",
      description: "Terdaftar oleh Kementerian Lingkungan Hidup sebagai laboratorium yang berkompeten dalam mendukung upaya perlindungan dan pengelolaan lingkungan hidup di Indonesia."
    },
    "2012": {
      title: "Kompetensi Air Sungai, Air Limbah, Udara & Padatan",
      description: "Ekspansi layanan dengan menambahkan kompetensi analisis udara dan padatan. Peningkatan fasilitas laboratorium dan sertifikasi untuk mendukung analisis lingkungan yang lebih komprehensif."
    },
    "2023": {
      title: "Kompetensi Air Sungai, Air Limbah, Udara, Lingkungan Kerja dan Padatan",
      description: "Penambahan kompetensi analisis lingkungan kerja sebagai bagian dari layanan terpadu. Implementasi teknologi terbaru dan standar internasional untuk memastikan kualitas analisis terbaik."
    },
    "On Going": {
      title: "To be Announce",
      description: "Terus berinovasi dan mengembangkan layanan laboratorium untuk memenuhi kebutuhan analisis lingkungan masa depan dengan teknologi dan standar yang semakin canggih."
    }
  };

  // Animation variants for reusable animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Image */}
      <motion.section 
        className="relative w-full h-screen overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={zoomIn}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/perempuan.jpg"
            alt="Laboratorium Lingkungan Team"
            fill
            className="object-cover"
            priority
            unoptimized
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[0.5px]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-end justify-start px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
          <motion.div 
            className="text-left text-white max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Dari Laboratorium Kami,<br />
              <span className="text-blue-300">Untuk Kelestarian Negeri</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
              PJT-LAB Merupakan Web resmi Laboratorium Perum Jasa Tirta I
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative">
        {/* Laboratorium Perum Jasa Tirta 1 Section */}
        <motion.section 
          id="company-info"
          className="py-8 sm:py-12 lg:py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 sm:mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Laboratorium Perum Jasa Tirta 1
              </motion.h2>
              <motion.div 
                className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-2xl"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Laboratorium Lingkungan Perum Jasa Tirta I didirikan berdasarkan Peraturan Pemerintah No. 46 Tahun 2010 dengan tujuan untuk melaksanakan pemantauan dan evaluasi kualitas air pada sumber air yang menjadi tanggung jawab perusahaan.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Laboratorium lingkungan Perum Jasa Tirta I telah memperoleh akreditasi dari Komite Akreditasi Nasional (KAN) sebagai Laboratorium Penguji dengan nomor registrasi LP-1646-IDN. Laboratorium lingkungan Perum Jasa Tirta I menerapkan Sistem Manajemen Mutu ISO/IEC 17025:2017 sebagai jaminan mutu dan validitas dalam setiap pengujian, dengan ruang lingkup pengujian air dan udara sesuai dengan standar yang berlaku.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Sejak tahun 2009, Laboratorium Lingkungan Perum Jasa Tirta I telah terregistrasi oleh Kementerian Lingkungan Hidup, menjadikannya sebagai laboratorium yang berkompeten dalam mendukung upaya perlindungan dan pengelolaan lingkungan hidup di Indonesia.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Vision & Duties Combined Section */}
        <motion.section 
          id="vision-duties"
          className="py-8 sm:py-12 lg:py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Left Side - Image */}
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/assets/images/lab.png"
                    alt="Laboratorium Perum Jasa Tirta I"
                    fill
                    className="object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'left center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20"></div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div 
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Visi Section */}
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Visi
                      <div className="w-12 sm:w-16 h-1 bg-blue-600 mt-2"></div>
                    </h2>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border-l-4 border-blue-600">
                      <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 leading-relaxed italic">
                        "Menjadi Perusahaan Pengelola Sumber Daya Air Nasional Kelas Dunia"
                      </p>
                    </div>
                  </motion.div>

                  {/* Tugas & Tanggung Jawab Section */}
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Tugas & Tanggung Jawab
                      <div className="w-12 sm:w-16 h-1 bg-green-600 mt-3"></div>
                    </h2>
                    
                    <div className="space-y-3 mt-4">
                      {/* PP 46/2010 Pasal 4 */}
                      <motion.div 
                        className="bg-blue-50 p-3 sm:p-4 rounded-xl border-l-4 border-blue-600"
                        variants={fadeInUp}
                      >
                        <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-2">Menurut PP 46/2010 Pasal 4</h3>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                          PJT I melaksanakan sebagai tugas dan tanggung jawab Pemerintah RI di bidang pengelolaan SDA, meliputi salah satunya pemantauan evaluasi kuantitas air dan evaluasi kualitas air pada Sumber Air yang menjadi tanggung jawab Perusahaan dan melaksanakan penyebarluasan hasil pemantauan.
                        </p>
                      </motion.div>

                      {/* Wilayah Kerja */}
                      <motion.div 
                        className="bg-green-50 p-3 sm:p-4 rounded-xl border-l-4 border-green-600"
                        variants={fadeInUp}
                      >
                        <h3 className="text-base sm:text-lg font-bold text-green-700 mb-2">Wilayah Kerja PJT I (PP 46/2010 Pasal 3)</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                            WS. Brantas : 40 Sungai
                          </li>
                          <li className="flex items-center text-gray-700 text-xs sm:text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                            WS Bengawan Solo : 25 Sungai
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Journey Timeline Section */}
        <motion.section 
          id="journey"
          className="py-8 sm:py-12 lg:py-16 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 sm:mb-6 text-center"
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Perjalanan Kami
              </motion.h2>
              
              <motion.div 
                className="mb-8 sm:mb-12 text-center"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  "Roadmap Laboratorium kami mencerminkan perjalanan panjang dan komitmen kami dalam pengembangan kompetensi serta layanan analisis lingkungan sejak tahun 1986."
                </p>
              </motion.div>

              {/* Mobile Timeline - Vertical */}
              <div className="block lg:hidden">
                <motion.div 
                  className="relative max-w-lg mx-auto"
                  variants={staggerContainer}
                  transition={{ delay: 0.6 }}
                >
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#61eabc] via-[#61eabc] to-[#61eabc] rounded-full shadow-lg"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {Object.entries(timelineData).map(([year, data], index) => (
                      <motion.div
                        key={year}
                        className="relative flex items-start"
                        variants={fadeInUp}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {/* Timeline Icon */}
                        <motion.div
                          className="relative z-10 w-16 h-16 bg-white border-4 border-[#61eabc] rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1, 
                            boxShadow: "0 20px 40px rgba(97, 234, 188, 0.4)",
                            borderColor: "#4ade80"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg 
                            className="w-8 h-8 text-[#61eabc]" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </motion.div>

                        {/* Content */}
                        <div className="ml-6 flex-1">
                          <div className="bg-[#61eabc] text-gray-800 px-3 py-1 rounded-lg font-bold text-sm shadow-lg inline-block mb-3">
                            {year}
                          </div>
                          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                            <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                              <span className="w-2 h-2 bg-[#61eabc] rounded-full mr-3"></span>
                              {data.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {data.description}
                            </p>
                            <div className="mt-3 h-1 bg-gradient-to-r from-[#61eabc] to-green-500 rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop Timeline - Horizontal */}
              <motion.div 
                className="hidden lg:block relative max-w-6xl mx-auto"
                variants={staggerContainer}
                transition={{ delay: 0.6 }}
              >
                {/* Main Timeline Line */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-[#61eabc] via-[#61eabc] to-[#61eabc] rounded-full shadow-lg"></div>
                
                {/* Timeline Items */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {Object.entries(timelineData).map(([year, data], index) => {
                    const isTop = index % 2 === 0;
                    
                    return (
                      <motion.div
                        key={year}
                        className="relative flex flex-col items-center"
                        variants={fadeInUp}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {/* Timeline Icon */}
                        <motion.div
                          className={`relative z-10 w-16 h-16 bg-white border-4 border-[#61eabc] rounded-full flex items-center justify-center shadow-lg cursor-pointer group ${
                            isTop ? 'mb-4' : 'mt-4 order-last'
                          }`}
                          onMouseEnter={() => setActiveYear(year)}
                          onMouseLeave={() => setActiveYear(null)}
                          whileHover={{ 
                            scale: 1.2, 
                            boxShadow: "0 20px 40px rgba(97, 234, 188, 0.4)",
                            borderColor: "#4ade80"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Calendar Icon */}
                          <svg 
                            className="w-8 h-8 text-[#61eabc] group-hover:text-green-500 transition-colors" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </motion.div>

                        {/* Year Label */}
                        <motion.div
                          className={`bg-[#61eabc] text-gray-800 px-3 py-1 rounded-lg font-bold text-sm shadow-lg ${
                            isTop ? 'order-last mt-2' : 'mb-2'
                          }`}
                          initial={{ opacity: 0, y: isTop ? 10 : -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          {year}
                        </motion.div>

                        {/* Description Rectangle - appears on hover */}
                        {activeYear === year && (
                          <motion.div
                            className={`absolute z-20 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 ${
                              isTop 
                                ? 'top-20 mt-4' 
                                : 'bottom-20 mb-4'
                            }`}
                            initial={{ 
                              opacity: 0, 
                              y: isTop ? -20 : 20,
                              scale: 0.9
                            }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              scale: 1
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: isTop ? -20 : 20,
                              scale: 0.9
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {/* Arrow pointer */}
                            <div 
                              className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border rotate-45 ${
                                isTop 
                                  ? 'top-[-8px] border-b-0 border-r-0 border-gray-100' 
                                  : 'bottom-[-8px] border-t-0 border-l-0 border-gray-100'
                              }`}
                            />
                            
                            {/* Content */}
                            <div className="relative">
                              <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-[#61eabc] rounded-full mr-3"></span>
                                {data.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed text-sm">
                                {data.description}
                              </p>
                              
                              {/* Decorative gradient line */}
                              <div className="mt-4 h-1 bg-gradient-to-r from-[#61eabc] to-green-500 rounded-full"></div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          id="team"
          className="py-8 sm:py-12 lg:py-16 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 sm:mb-8 text-center"
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Tim Kami
              </motion.h2>
              
              <motion.div 
                className="text-center mb-6 sm:mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                  Kami memiliki Tim Profesional dan tersertifikasi untuk menunjang kebutuhan 
                  <span className="font-bold text-black"> analisis kualitas air</span> di laboratorium lingkungan
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg"
                variants={zoomIn}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/assets/images/strukturorganisasi.png"
                    alt="Struktur Organisasi Laboratorium PJT I"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Certification Section */}
        <motion.section 
          id="certification"
          className="py-8 sm:py-12 lg:py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 sm:mb-8 text-center"
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Sertifikasi dan Registrasi
              </motion.h2>
              
              <motion.div 
                className="text-center mb-8 sm:mb-12"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Laboratorium kami telah memperoleh sertifikasi dan akreditasi resmi yang menjamin 
                  kualitas dan kredibilitas layanan analisis lingkungan sesuai standar nasional dan internasional.
                </p>
              </motion.div>

              {/* Document Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
                variants={staggerContainer}
                transition={{ delay: 0.6 }}
              >
                {/* Akreditasi Document */}
                <motion.div
                  className="group cursor-pointer"
                  variants={zoomIn}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  onClick={() => setSelectedDocument('akreditasi')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Document Preview */}
                    <div className="relative h-64 sm:h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <div className="text-center p-4 sm:p-6">
                        <div className="w-12 sm:w-16 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                          <svg className="w-6 sm:w-8 h-8 sm:h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Sertifikat Akreditasi</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">KAN LP-1646-IDN</p>
                        <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
                          <span>Lihat Dokumen</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      {/* Preview Badge */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        PDF
                      </div>
                    </div>
                    
                    {/* Document Info */}
                    <div className="p-4 sm:p-6 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Tipe Dokumen</p>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">Akreditasi Laboratorium</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Status</p>
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Aktif
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Registrasi KLHK Document */}
                <motion.div
                  className="group cursor-pointer"
                  variants={zoomIn}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  onClick={() => setSelectedDocument('registrasi_klhk')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Document Preview */}
                    <div className="relative h-64 sm:h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <div className="text-center p-4 sm:p-6">
                        <div className="w-12 sm:w-16 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                          <svg className="w-6 sm:w-8 h-8 sm:h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Registrasi KLHK</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Kementerian Lingkungan Hidup</p>
                        <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
                          <span>Lihat Dokumen</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      {/* Preview Badge */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        PDF
                      </div>
                    </div>
                    
                    {/* Document Info */}
                    <div className="p-4 sm:p-6 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Tipe Dokumen</p>
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">Registrasi Laboratorium</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm text-gray-500 mb-1">Status</p>
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Terdaftar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Partner Kami Section */}
        <motion.section 
          id="partners"
          className="py-8 sm:py-12 lg:py-16 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-6 sm:mb-8 text-center"
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Partner Kami
              </motion.h2>
              
              <motion.div 
                className="text-center mb-8 sm:mb-12"
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Kami bangga bekerja sama dengan berbagai institusi dan organisasi terpercaya 
                  dalam mendukung visi misi pengelolaan lingkungan hidup Indonesia.
                </p>
              </motion.div>

              {/* Logo Carousel Container */}
              <motion.div 
                className="relative overflow-hidden"
                variants={fadeInUp}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {/* Auto-scrolling carousel */}
                <div className="flex animate-scroll">
                  {/* First set of logos */}
                  {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 group mx-3 sm:mx-4 lg:mx-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-2 sm:p-3 lg:p-4 group-hover:shadow-lg transition-all duration-300">
                        <Image
                          src={partner.src}
                          alt={`${partner.name} Logo`}
                          width={120}
                          height={80}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          unoptimized
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Gradient overlays for smooth edge effect */}
                <div className="absolute left-0 top-0 w-12 sm:w-16 lg:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-12 sm:w-16 lg:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
              </motion.div>

              {/* Partnership Message */}
              <motion.div 
                className="text-center mt-8 sm:mt-12"
                variants={fadeInUp}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <p className="text-base sm:text-lg font-semibold text-gray-800 text-center">
                      Kemitraan Strategis untuk Masa Depan Lingkungan yang Berkelanjutan
                    </p>
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Melalui kolaborasi dengan mitra-mitra terpercaya, kami terus mengembangkan 
                    standar kualitas analisis lingkungan dan memberikan kontribusi nyata 
                    bagi perlindungan ekosistem Indonesia.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* PDF Modal Viewer */}
        {selectedDocument && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedDocument(null)}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {selectedDocument === 'akreditasi' ? 'Sertifikat Akreditasi KAN' : 'Registrasi KLHK'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedDocument === 'akreditasi' 
                      ? 'Laboratorium Penguji LP-1646-IDN' 
                      : 'Kementerian Lingkungan Hidup dan Kehutanan'
                    }
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* PDF Viewer Container */}
              <div className="h-[calc(90vh-120px)] overflow-auto bg-gray-100">
                <div className="flex items-center justify-center h-full p-8">
                  <iframe
                    src={`/assets/certificate/${selectedDocument}.pdf`}
                    className="w-full h-full border-0 rounded-lg shadow-lg"
                    title={selectedDocument === 'akreditasi' ? 'Sertifikat Akreditasi' : 'Registrasi KLHK'}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Dokumen resmi Laboratorium Perum Jasa Tirta I
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={`/assets/certificate/${selectedDocument}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                  <button
                    onClick={() => setSelectedDocument(null)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}