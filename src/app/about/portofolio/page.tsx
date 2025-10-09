"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
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
  methodology: string[];
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
    { id: "semua", label: "Semua Kategori" },
    { id: "air", label: "Air" },
    { id: "limbah", label: "Limbah" },
    { id: "udara", label: "Udara & Emisi" },
    { id: "lingkungan_kerja", label: "Lingkungan Kerja" },
  ];

  // Data portofolio proyek
  const portfolioProjects = [
    {
      id: 1,
      title: "Analisis Kualitas Air Sungai",
      description: "Pemantauan dan analisis parameter fisika, kimia dan biologi air sungai untuk evaluasi status mutu air dan indeks pencemaran.",
      category: "air",
      image: "/assets/images/portfolio/sungai.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 8,
      tags: ["Air Sungai", "Kualitas Air", "BOD", "COD", "TSS"],
      results: [
        "Pengujian 25+ parameter fisika, kimia dan biologi",
        "Analisis metode gravimetri, volumetri, dan spektrofotometri",
        "Evaluasi indeks pencemaran air berdasarkan Kepmen LH",
        "Identifikasi sumber pencemar potensial",
      ],
      methodology: [
        "SNI 6989.57:2008 - Metode pengambilan contoh air permukaan",
        "SNI 6989.72:2009 - Pengujian BOD",
        "SNI 6989.2:2009 - Pengujian pH",
        "SNI 6989.3:2019 - Pengujian padatan tersuspensi total (TSS)",
      ],
      gallery: [
        "/assets/images/portfolio/sungai.webp",
         "/assets/images/portfolio/sungai.webp",
         "/assets/images/portfolio/sungai.webp",
      ],
    },
    {
      id: 2,
      title: "Monitoring Kualitas Air Waduk",
      description: "Pemantauan rutin parameter kualitas air waduk untuk mengevaluasi kondisi ekosistem perairan dan potensi pemanfaatan.",
      category: "air",
      image: "/assets/images/portfolio/sungai.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 7,
      tags: ["Air Waduk", "Kualitas Air", "Limnologi", "Stratifikasi"],
      results: [
        "Pengambilan sampel pada berbagai kedalaman waduk",
        "Analisis stratifikasi suhu dan oksigen terlarut",
        "Pemantauan parameter eutrofikasi (N, P)",
        "Evaluasi kondisi ekologi perairan waduk",
      ],
      methodology: [
        "SNI 6989.57:2008 - Metode pengambilan contoh air permukaan",
        "SNI 6989.59:2008 - Metode pengambilan contoh air limbah",
        "SNI 06-2412-1991 - Metode pengambilan contoh kualitas air",
        "SNI 6989.72:2009 - Pengujian BOD",
      ],
      gallery: [
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
      ],
    },
    {
      id: 3,
      title: "Pengujian Air Limbah Industri",
      description: "Analisis komprehensif air limbah industri untuk evaluasi kepatuhan baku mutu dan efektivitas pengolahan.",
      category: "limbah",
      image: "/assets/images/portfolio/sungai.webp",
      client: "Sampling Internal",
      date: "2022",
      location: "Jawa Timur",
      team: 6,
      tags: ["Air Limbah", "Industri", "IPAL", "Baku Mutu"],
      results: [
        "Pengujian parameter spesifik limbah industri",
        "Analisis logam berat dengan AAS/ICP",
        "Evaluasi kepatuhan terhadap baku mutu",
        "Rekomendasi optimalisasi sistem pengolahan",
      ],
      methodology: [
        "SNI 6989.59:2008 - Metode pengambilan contoh air limbah",
        "SNI 6989.2:2009 - Pengujian pH",
        "SNI 6989.73:2009 - Pengujian COD",
        "SNI 6989.3:2019 - Pengujian padatan tersuspensi total (TSS)",
      ],
      gallery: [
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
        "/assets/images/portfolio/sungai.webp",
      ],
    },
    {
      id: 4,
      title: "Analisis Air Limbah Rumah Sakit",
      description: "Pengujian khusus untuk air limbah rumah sakit dengan parameter biologis dan kimia sesuai regulasi.",
      category: "limbah",
      image: "/assets/images/portfolio/sungai.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 5,
      tags: ["Limbah Medis", "Rumah Sakit", "Mikrobiologi", "Desinfeksi"],
      results: [
        "Pengujian parameter mikrobiologi patogen",
        "Analisis residu antibiotik dan disinfektan",
        "Evaluasi efektivitas sistem pengolahan limbah medis",
        "Verifikasi kepatuhan terhadap Permen LHK",
      ],
      methodology: [
        "SNI 6989.59:2008 - Metode pengambilan contoh air limbah",
        "SNI 6989.7:2019 - Pengujian BOD",
        "SNI 6989.11:2019 - Pengujian pH",
        "SNI 6989.80:2011 - Pengujian total coliform dan faecal coliform",
      ],
      gallery: [
        "/assets/images/portfolio/rs-1.webp",
        "/assets/images/portfolio/rs-2.webp",
        "/assets/images/portfolio/rs-3.webp",
      ],
    },
    {
      id: 5,
      title: "Pemantauan Air Limbah Hotel",
      description: "Analisis kualitas air limbah dari kegiatan perhotelan untuk memastikan kepatuhan terhadap standar lingkungan.",
      category: "limbah",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2022",
      location: "Jawa Timur",
      team: 4,
      tags: ["Air Limbah", "Hotel", "IPAL Domestik", "Deterjen"],
      results: [
        "Pengujian parameter BOD, COD, TSS, pH, dan minyak-lemak",
        "Analisis kandungan deterjen dan surfaktan",
        "Evaluasi efisiensi pengolahan limbah domestik hotel",
        "Rekomendasi optimalisasi sistem pengolahan",
      ],
      methodology: [
        "SNI 6989.59:2008 - Metode pengambilan contoh air limbah",
        "SNI 6989.72:2009 - Pengujian BOD",
        "SNI 6989.73:2009 - Pengujian COD",
        "SNI 06-6989.51-2005 - Pengujian kadar surfaktan anionik",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 6,
      title: "Pengujian Air Limbah Domestik",
      description: "Analisis air limbah dari permukiman dan area komersial untuk mengevaluasi beban pencemaran dan efektivitas pengolahan.",
      category: "limbah",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 5,
      tags: ["Limbah Domestik", "Septik Tank", "IPAL Komunal"],
      results: [
        "Pengujian parameter BOD, COD, TSS, pH, dan total koliform",
        "Evaluasi kinerja IPAL komunal dan septik tank",
        "Analisis beban pencemaran limbah domestik",
        "Rekomendasi teknologi pengolahan yang sesuai",
      ],
      methodology: [
        "SNI 6989.59:2008 - Metode pengambilan contoh air limbah",
        "SNI 6989.72:2009 - Pengujian BOD",
        "SNI 6989.3:2019 - Pengujian padatan tersuspensi total (TSS)",
        "SNI 6989.80:2011 - Pengujian total coliform",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 7,
      title: "Analisis Air Minum Dalam Kemasan",
      description: "Pengujian kualitas air minum dalam kemasan sesuai dengan standar SNI dan persyaratan kesehatan.",
      category: "air",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 6,
      tags: ["AMDK", "Air Minum", "Mikrobiologi", "SNI"],
      results: [
        "Pengujian parameter fisika, kimia dan mikrobiologi",
        "Analisis kandungan mineral dan logam berat",
        "Pengujian cemaran mikroba patogen",
        "Verifikasi kesesuaian dengan standar BPOM dan SNI",
      ],
      methodology: [
        "SNI 01-3553-2015 - Persyaratan air minum dalam kemasan",
        "SNI 6989.72:2009 - Pengujian BOD",
        "SNI 06-6989.31-2005 - Pengujian kadar fosfat",
        "SNI 01-2897-2008 - Metode uji cemaran mikroba dalam pangan",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 8,
      title: "Monitoring Kualitas Udara Ambient",
      description: "Pemantauan kualitas udara ambient untuk mengevaluasi tingkat pencemaran udara dan potensi dampaknya.",
      category: "udara",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 7,
      tags: ["Udara Ambient", "PM2.5", "PM10", "Gas Pencemar"],
      results: [
        "Pengukuran parameter PM10, PM2.5, SO2, NO2, CO, dan O3",
        "Analisis menggunakan HVAS, MPAS, dan impinger",
        "Evaluasi indeks kualitas udara (ISPU)",
        "Pemetaan dispersi pencemar udara",
      ],
      methodology: [
        "SNI 19-7119.6-2005 - Penentuan lokasi pengambilan contoh uji pemantauan kualitas udara ambien",
        "SNI 19-7119.3-2005 - Cara uji partikel tersuspensi total menggunakan peralatan HVAS",
        "SNI 7119.7:2017 - Cara uji kadar sulfur dioksida dengan metode pararosanilin menggunakan spektrofotometer",
        "SNI 7119.2:2017 - Cara uji kadar nitrogen dioksida dengan metode Griess Saltzman",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 9,
      title: "Pengujian Emisi Sumber Tidak Bergerak",
      description: "Analisis emisi udara dari cerobong industri untuk evaluasi kepatuhan terhadap baku mutu dan efisiensi pengendalian emisi.",
      category: "udara",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2022",
      location: "Jawa Timur",
      team: 8,
      tags: ["Emisi", "Cerobong", "Stack Sampling", "Baku Mutu"],
      results: [
        "Sampling isokinetik pada cerobong industri",
        "Pengukuran parameter partikulat dan gas (SO2, NOx, dll)",
        "Analisis opasitas dan debu total",
        "Evaluasi efisiensi alat pengendali pencemaran udara",
      ],
      methodology: [
        "SNI 19-7117.2-2005 - Emisi gas buang - Cara uji kadar partikel",
        "SNI 19-7117.3.1-2005 - Emisi gas buang - Cara uji kadar SO2",
        "SNI 19-7117.3.2-2005 - Emisi gas buang - Cara uji kadar NOx",
        "SNI 19-7117.12-2005 - Emisi gas buang - Cara uji opasitas",
      ],
      gallery: [
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
        "/assets/images/portfolio/udara.webp",
      ],
    },
    {
      id: 10,
      title: "Pengujian Kualitas Lingkungan Kerja",
      description: "Pemantauan parameter lingkungan kerja untuk memastikan keselamatan dan kesehatan kerja (K3) karyawan.",
      category: "lingkungan_kerja",
      image: "/assets/images/portfolio/udara.webp",
      client: "Sampling Internal",
      date: "2025",
      location: "Jawa Timur",
      team: 5,
      tags: ["K3", "Iklim Kerja", "Kebisingan", "Pencahayaan"],
      results: [
        "Pengukuran kebisingan, pencahayaan dan getaran",
        "Analisis paparan debu dan bahan kimia di udara kerja",
        "Evaluasi iklim kerja (suhu, kelembaban, kecepatan angin)",
        "Rekomendasi pengendalian risiko K3",
      ],
      methodology: [
        "SNI 7231:2009 - Metoda pengukuran intensitas penerangan di tempat kerja",
        "SNI 7232:2009 - Metoda pengukuran iklim kerja (suhu dan kelembaban)",
        "SNI 7234:2009 - Metoda pengukuran kebisingan di tempat kerja",
        "SNI 7235:2009 - Metoda pengukuran intensitas getaran di tempat kerja",
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

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm">
                Laboratorium Terakreditasi KAN
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kompetensi <span className="text-blue-300">Pengujian Kami</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Laboratorium Lingkungan PJT I memiliki kompetensi lengkap dalam pengujian berbagai jenis sampel
              lingkungan dengan metode terakreditasi dan personel yang berpengalaman.
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
        <div className="w-full max-w-7xl mx-auto px-4">
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
      <div className="w-full max-w-7xl mx-auto px-4">
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
                            Jenis: {project.title.includes("Air") ? "Air" : project.category === "limbah" ? "Limbah" : project.category === "udara" ? "Udara/Emisi" : "Lingkungan Kerja"}
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
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kemampuan dan Akreditasi
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Laboratorium kami terakreditasi KAN dengan pengalaman bertahun-tahun dalam pengujian berbagai parameter lingkungan
                menggunakan metode standar nasional dan internasional.
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
                <h3 className="text-4xl font-bold text-blue-600 mb-2">100+</h3>
                <p className="text-gray-700">Parameter Uji</p>
              </motion.div>
              
              <motion.div 
                className="bg-green-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">60+</h3>
                <p className="text-gray-700">Metode Terakreditasi</p>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-amber-600 mb-2">10+</h3>
                <p className="text-gray-700">Jenis Sampling</p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 rounded-xl p-6 text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">15+</h3>
                <p className="text-gray-700">Tenaga Ahli</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
  <div className="w-full max-w-7xl mx-auto px-4">
            <motion.div 
                className="max-w-5xl mx-auto text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Butuh Pengujian Sampel Lingkungan?
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                    Laboratorium Lingkungan PJT I siap membantu Anda dengan layanan pengujian sampel lingkungan
                    berstandar nasional dan internasional dengan hasil terakreditasi KAN.
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
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Project Title */}
              <div className="relative">
                <div className="h-48 relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2">
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
                  <h2 className="text-xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                
                {/* Close Button */}
                <button 
                  type="button"
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content - Scrollable */}
              <div className="p-5 overflow-y-auto max-h-[calc(80vh-12rem)]">
                <div className="grid md:grid-cols-3 gap-5">
                  {/* Left Column - Project Details */}
                  <div className="md:col-span-2">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Deskripsi Proyek</h3>
                    <p className="text-gray-700 mb-5 text-sm">
                      {selectedProject.description}
                    </p>
                    
                    <h3 className="text-base font-bold text-gray-800 mb-3">Hasil Proyek</h3>
                    <ul className="space-y-1.5 mb-5">
                      {selectedProject.results.map((result: string, index: number) => (
                        <li key={index} className="flex items-start text-sm">
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-2">
                            <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tags */}
                    <div className="mb-5">
                      <h3 className="text-base font-bold text-gray-800 mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag: string, index: number) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Methodology */}
                    <div className="mb-5">
                      <h3 className="text-base font-bold text-gray-800 mb-3">Metodologi Pengujian</h3>
                      <ul className="space-y-1.5">
                        {selectedProject.methodology?.map((method: string, index: number) => (
                          <li key={index} className="flex items-start text-xs text-gray-700">
                            <div className="flex-shrink-0 w-3 h-3 bg-gray-100 rounded-full flex items-center justify-center mt-0.5 mr-2">
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            </div>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Column - Project Info */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-base font-bold text-gray-800 mb-3">Informasi Proyek</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="text-xs text-gray-500 mb-0.5">Jenis Sampling</h4>
                        <p className="font-medium text-gray-800">{selectedProject.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-gray-500 mb-0.5">Lokasi</h4>
                        <p className="font-medium text-gray-800">{selectedProject.location}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-gray-500 mb-0.5">Tahun</h4>
                        <p className="font-medium text-gray-800">{selectedProject.date}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-gray-500 mb-0.5">Tim Proyek</h4>
                        <p className="font-medium text-gray-800">{selectedProject.team} orang</p>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        {(() => {
                            const waNumber = "6281230738591";
                            return (
                                <a 
                                    href={`https://wa.me/${waNumber}?text=Halo,%20saya%20tertarik%20dengan%20proyek%20serupa%20dengan%20${encodeURIComponent(selectedProject.title)}.%20Bisakah%20kita%20diskusikan%20lebih%20lanjut?`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xs py-1">
                                        <span>Konsultasi Pengujian Serupa</span>
                                        <ArrowRight className="ml-1" size={14} />
                                    </Button>
                                </a>
                            );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Gallery */}
                <div className="mt-5">
                  <h3 className="text-base font-bold text-gray-800 mb-3">Galeri Proyek</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProject.gallery.map((image: string, index: number) => (
                      <div key={index} className="relative h-32 rounded-md overflow-hidden">
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