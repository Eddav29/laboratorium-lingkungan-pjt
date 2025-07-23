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
        className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-20 pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Kompetensi & Keahlian
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100"
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pengalaman Puluhan Tahun dalam Pemantauan dan Analisis Lingkungan
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-blue-300 mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
            ></motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative">
        {/* Kompetensi Bidang Air */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Kompetensi Bidang Air
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Lebih dari 30 tahun pengalaman dalam pemantauan dan analisis kualitas air
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
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
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="space-y-6 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Pengambilan Sampel Terpercaya</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Metode pengambilan sampel yang mengikuti standar nasional dan internasional untuk memastikan representativitas dan validitas data.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Analisis Laboratorium Komprehensif</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Analisis parameter fisika, kimia, dan biologi air dengan menggunakan peralatan canggih dan metode terakreditasi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cakupan Wilayah Strategis</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan rutin di 65 titik sampling meliputi WS Brantas dan WS Bengawan Solo dengan frekuensi bulanan yang konsisten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-800 mb-2">Parameter Unggulan</h4>
                    <p className="text-blue-700 text-sm">
                      pH, DO, BOD, COD, TSS, Nitrat, Nitrit, Amoniak, Fosfat, Logam Berat, Pestisida, dan Parameter Mikrobiologi
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Kompetensi di Luar WS Brantas */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Kompetensi di Luar WS Brantas
                </h2>
                <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ekspansi layanan pemantauan air di berbagai wilayah strategis Indonesia
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div 
                  className="space-y-6"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Jangkauan Nasional</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Melayani pemantauan kualitas air di berbagai provinsi di Indonesia dengan standar kualitas yang sama tingginya.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Adaptasi Lokasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Kemampuan adaptasi terhadap karakteristik geografis dan kondisi lingkungan yang berbeda di setiap wilayah.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Kemitraan Strategis</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Kolaborasi dengan berbagai instansi pemerintah dan swasta untuk pemantauan lingkungan yang komprehensif.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-800 mb-2">Cakupan Wilayah</h4>
                    <p className="text-green-700 text-sm">
                      Jawa Timur, Jawa Tengah, DI Yogyakarta, Jawa Barat, DKI Jakarta, dan wilayah strategis lainnya
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src="/assets/images/kolase.jpg"
                    alt="Pemantauan Air di Berbagai Wilayah"
                    fill
                    className="object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Kompetensi Bidang Non-Air */}
        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Kompetensi Bidang Non-Air
                </h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Lebih dari 10 tahun keahlian dalam monitoring kualitas udara dan lingkungan kerja
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/assets/images/analis.jpg"
                    alt="Monitoring Kualitas Udara"
                    fill
                    className="object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="space-y-6 order-1 lg:order-2"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitoring Udara Ambient</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pemantauan kualitas udara ambient untuk mendeteksi polutan seperti PM2.5, PM10, SO2, NO2, CO, dan Ozon.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Analisis Lingkungan Kerja</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Evaluasi kondisi lingkungan kerja termasuk kualitas udara, kebisingan, pencahayaan, dan faktor ergonomi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sampling & Instrumentasi</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Penggunaan peralatan sampling dan instrumentasi canggih untuk pengukuran real-time dan sampling manual.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
                    <h4 className="font-semibold text-purple-800 mb-2">Parameter Monitoring</h4>
                    <p className="text-purple-700 text-sm">
                      PM2.5, PM10, SO2, NO2, CO, O3, H2S, NH3, Kebisingan, Getaran, Pencahayaan, Iklim Kerja
                    </p>
                  </div>
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