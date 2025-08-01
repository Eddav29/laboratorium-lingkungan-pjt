"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Filter, Calendar, Users, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  location: string;
  team: number;
  tags: string[];
  results: string[];
  gallery: string[];
}

export default function Portofolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Kategori portofolio
  const categories = [
    { id: "semua", label: "Semua Proyek" },
    { id: "air", label: "Pengujian Air" },
    { id: "udara", label: "Pengujian Udara" },
    { id: "limbah", label: "Pengelolaan Limbah" },
    { id: "konsultasi", label: "Konsultasi Lingkungan" },
  ];

  // Data portofolio proyek
  const portfolioProjects = [
    {
      id: 1,
      title: "Evaluasi Kualitas Air Sungai Brantas",
      description: "Program pemantauan dan evaluasi kualitas air sungai Brantas untuk mendukung pengelolaan sumber daya air berkelanjutan.",
      category: "air",
      image: "/assets/images/portfolio/sungai.webp",
      client: "Pemerintah Provinsi Jawa Timur",
      date: "2023",
      location: "Jawa Timur",
      team: 12,
      tags: ["Pengujian Air", "Sungai", "Lingkungan"],
      results: [
        "Pemantauan 45 titik sampel sepanjang sungai",
        "Analisis 22 parameter kualitas air",
        "Identifikasi 3 area kritis pencemaran",
        "Rekomendasi strategi pengendalian pencemaran",
      ],
      gallery: [
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
      ],
    },
    {
      id: 2,
      title: "Pemantauan Kualitas Udara Kawasan Industri",
      description: "Pengujian kualitas udara ambien dan emisi di kawasan industri untuk memastikan kepatuhan terhadap standar lingkungan nasional.",
      category: "udara",
      image: "/assets/images/portfolio/udara.webp",
      client: "PT Industri Kimia Nusantara",
      date: "2022",
      location: "Gresik, Jawa Timur",
      team: 8,
      tags: ["Kualitas Udara", "Industri", "Emisi"],
      results: [
        "Pengukuran 6 parameter kualitas udara ambien",
        "Analisis emisi pada 12 cerobong industri",
        "Pemetaan dispersi polutan",
        "Laporan kepatuhan lingkungan",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 3,
      title: "Audit Pengelolaan Limbah Cair Industri Tekstil",
      description: "Evaluasi menyeluruh sistem pengolahan limbah cair industri tekstil untuk optimalisasi proses dan kepatuhan lingkungan.",
      category: "limbah",
      image: "/assets/images/portfolio/proyek.webp",
      client: "PT Tekstil Jaya Makmur",
      date: "2022",
      location: "Bandung, Jawa Barat",
      team: 6,
      tags: ["Limbah Cair", "Industri Tekstil", "IPAL"],
      results: [
        "Evaluasi efisiensi IPAL eksisting",
        "Identifikasi 5 titik optimalisasi proses",
        "Peningkatan efisiensi pengolahan sebesar 35%",
        "Rekomendasi teknologi pengolahan limbah terbaru",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 4,
      title: "Konsultasi AMDAL Pembangunan Bendungan",
      description: "Penyusunan dokumen AMDAL untuk proyek pembangunan bendungan baru, termasuk analisis dampak lingkungan dan sosial.",
      category: "konsultasi",
      image: "/assets/images/portfolio/proyek.webp",
      client: "Kementerian Pekerjaan Umum dan Perumahan Rakyat",
      date: "2021",
      location: "Madiun, Jawa Timur",
      team: 15,
      tags: ["AMDAL", "Bendungan", "Analisis Dampak"],
      results: [
        "Penyusunan dokumen AMDAL komprehensif",
        "Konsultasi publik dengan 12 desa terdampak",
        "Analisis 18 parameter lingkungan",
        "Perencanaan mitigasi dampak lingkungan",
      ],
      gallery: [
        "/assets/images/portfolio/proyek.webp",
        "/assets/images/portfolio/proyek.webp",
        "/assets/images/portfolio/proyek.webp",
      ],
    },
    {
      id: 5,
      title: "Pemantauan Kualitas Air Waduk Sutami",
      description: "Program pemantauan berkala kualitas air Waduk Sutami untuk pengelolaan sumber daya air dan ekosistem akuatik.",
      category: "air",
      image: "/assets/images/portfolio/sutami.webp",
      client: "Perum Jasa Tirta I",
      date: "2023",
      location: "Malang, Jawa Timur",
      team: 10,
      tags: ["Waduk", "Kualitas Air", "Ekosistem"],
      results: [
        "Pemantauan 30 titik sampel di seluruh waduk",
        "Analisis 15 parameter fisika-kimia air",
        "Pemantauan komunitas plankton dan bentik",
        "Penyusunan indeks kualitas air waduk",
      ],
      gallery: [
        "/assets/images/portfolio/sutami.webp",
        "/assets/images/portfolio/sutami.webp",
        "/assets/images/portfolio/sutami.webp",
      ],
    },
    {
      id: 6,
      title: "Konsultasi Efisiensi Energi dan Pengelolaan Lingkungan",
      description: "Layanan konsultasi untuk optimalisasi efisiensi energi dan pengelolaan lingkungan di kawasan industri terpadu.",
      category: "konsultasi",
      image: "/assets/images/portfolio/udara.webp",
      client: "PT Kawasan Industri Jababeka",
      date: "2022",
      location: "Bekasi, Jawa Barat",
      team: 8,
      tags: ["Efisiensi Energi", "Industri", "Manajemen Lingkungan"],
      results: [
        "Audit energi pada 15 fasilitas industri",
        "Identifikasi potensi penghematan energi 28%",
        "Optimalisasi sistem pengelolaan limbah terpadu",
        "Implementasi sistem monitoring lingkungan real-time",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
  ];

  // Filter proyek berdasarkan kategori
  const filteredProjects = selectedCategory === "semua" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 pb-16 bg-blue-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/kolase.jpg"
            alt="Portofolio Bisnis"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm">
                Portofolio Bisnis Strategis
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Proyek & Layanan <span className="text-blue-300">Unggulan Kami</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Laboratorium Lingkungan Perum Jasa Tirta I telah menyelesaikan berbagai proyek lingkungan 
              dengan hasil yang terukur dan berkelanjutan. Berikut beberapa portofolio proyek kami.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Filter size={16} />
                <span className="text-sm">Lebih dari 100+ proyek selesai</span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Users size={16} />
                <span className="text-sm">Melayani 50+ klien</span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <MapPin size={16} />
                <span className="text-sm">Di seluruh Indonesia</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,85.3C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <Filter size={20} className="text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Filter Kategori:</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {filteredProjects.length === 0 ? (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white p-8 rounded-2xl max-w-lg mx-auto shadow-sm">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Filter size={24} className="text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak Ada Proyek Ditemukan</h3>
                    <p className="text-gray-600 mb-4">
                      Tidak ada proyek yang sesuai dengan filter yang dipilih. Silakan coba kategori lain.
                    </p>
                    <Button
                      onClick={() => setSelectedCategory("semua")}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Lihat Semua Proyek
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                      variants={fadeIn}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -5 }}
                    >
                      {/* Project Image */}
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className={`
                            ${project.category === 'air' ? 'bg-blue-500' : ''}
                            ${project.category === 'udara' ? 'bg-green-500' : ''}
                            ${project.category === 'limbah' ? 'bg-amber-500' : ''}
                            ${project.category === 'konsultasi' ? 'bg-purple-500' : ''}
                            text-white hover:opacity-90
                          `}>
                            {categories.find(c => c.id === project.category)?.label}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Project Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {project.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {project.location}
                          </div>
                        </div>
                        
                        {/* View Details Button */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span className="text-sm text-gray-500">
                            Klien: {project.client.length > 20 ? `${project.client.substring(0, 20)}...` : project.client}
                          </span>
                          <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                            <span>Detail</span>
                            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dampak dan Pencapaian
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan hasil yang terukur 
                dan berkontribusi pada pelestarian lingkungan hidup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-blue-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">120+</h3>
                <p className="text-gray-700">Proyek Selesai</p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">50+</h3>
                <p className="text-gray-700">Klien Puas</p>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-amber-600 mb-2">20+</h3>
                <p className="text-gray-700">Kota Terjangkau</p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">24+</h3>
                <p className="text-gray-700">Tahun Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
            <motion.div 
                className="max-w-5xl mx-auto text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Siap Bekerja Sama Dengan Kami?
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                    Laboratorium Lingkungan Perum Jasa Tirta I siap membantu Anda dengan berbagai layanan 
                    analisis lingkungan berkualitas tinggi. Hubungi kami untuk konsultasi kebutuhan proyek Anda.
                </p>
                {(() => {
                    const waNumber = "6281230738591";
                    return (
                        <a 
                            href={`https://wa.me/${waNumber}?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Laboratorium%20Lingkungan%20PJT%20I`}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg flex items-center mx-auto">
                                <span>Hubungi Kami via WhatsApp</span>
                                <ArrowRight className="ml-2" />
                            </Button>
                        </a>
                    );
                })()}
            </motion.div>
        </div>
    </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Project Title */}
              <div className="relative">
                <div className="h-64 relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <Badge className={`
                      ${selectedProject.category === 'air' ? 'bg-blue-500' : ''}
                      ${selectedProject.category === 'udara' ? 'bg-green-500' : ''}
                      ${selectedProject.category === 'limbah' ? 'bg-amber-500' : ''}
                      ${selectedProject.category === 'konsultasi' ? 'bg-purple-500' : ''}
                      text-white hover:opacity-90
                    `}>
                      {categories.find(c => c.id === selectedProject.category)?.label}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content - Scrollable */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Project Details */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Deskripsi Proyek</h3>
                    <p className="text-gray-700 mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Hasil Proyek</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.results.map((result: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tags */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag: string, index: number) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Project Info */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Informasi Proyek</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Klien</h4>
                        <p className="font-medium text-gray-800">{selectedProject.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Lokasi</h4>
                        <p className="font-medium text-gray-800">{selectedProject.location}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Tahun</h4>
                        <p className="font-medium text-gray-800">{selectedProject.date}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Tim Proyek</h4>
                        <p className="font-medium text-gray-800">{selectedProject.team} orang</p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        {(() => {
                            const waNumber = "6281230738591";
                            return (
                                <a 
                                    href={`https://wa.me/${waNumber}?text=Halo,%20saya%20tertarik%20dengan%20proyek%20serupa%20dengan%20${encodeURIComponent(selectedProject.title)}.%20Bisakah%20kita%20diskusikan%20lebih%20lanjut?`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                                        <span>Hubungi untuk Proyek Serupa</span>
                                        <ArrowRight className="ml-2" size={16} />
                                    </Button>
                                </a>
                            );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Gallery */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Galeri Proyek</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((image: string, index: number) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - Gallery ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}