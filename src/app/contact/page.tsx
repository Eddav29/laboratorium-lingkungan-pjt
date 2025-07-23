"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

// Simple SVG Icons
const MapPinIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EnvelopeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
);

const BuildingOfficeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export default function ContactPage() {
    // State for selected branch
    const [selectedBranch, setSelectedBranch] = useState<"malang" | "mojokerto" | "solo">("malang");

    // Branch data
    const branches = {
        malang: {
            name: "Lab. Malang",
            image: "/assets/images/lab.png",
            shortAddress: "Malang, Jawa Timur",
            email: "lablingkunganpjt1@gmail.com",
            fullAddress: "Jl. Surabaya No.2A, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
            workingHours: "Senin - Jumat: 08:00 - 16:00 WIB",
            phone: "+62 812-3073-8591",
            description: "Pusat laboratorium utama dengan fasilitas lengkap",
            coordinates: { lat: -7.9655562, lng: 112.6188524 },
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0971!2d112.6162775!3d-7.9655562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788281b93990df%3A0xd788d8a4e1d290d8!2sPerum%20Jasa%20Tirta%20I!5e0!3m2!1sen!2sid!4v1644444444444!5m2!1sen!2sid"
        },
        mojokerto: {
            name: "Lab. Mojokerto",
            image: "/assets/images/lab_cropped.png",
            shortAddress: "Mojokerto, Jawa Timur",
            email: "llmjkt22@gmail.com",
            fullAddress: "Jl. Raya Lengkong, Jatiwetan, Kec. Mojoanyar Mojokerto Jawa Timur Indonesia 61364",
            workingHours: "Senin - Jumat: 08:00 - 16:00 WIB",
            phone: "+62 851-7224-7241",
            description: "Cabang strategis dengan teknologi modern",
            coordinates: { lat: -7.4459199, lng: 112.4652101 },
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1234!2d112.4652101!3d-7.4459199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780dd77cebd423%3A0x50fbc33142b54443!2sPerum%20Jasa%20Tirta%20I!5e0!3m2!1sen!2sid!4v1644444444444!5m2!1sen!2sid"
        },
        solo: {
            name: "Lab. Solo",
            image: "/assets/images/lengkap.jpg",
            shortAddress: "Solo, Jawa Tengah",
            email: "lablingsolo28@gmail.com",
            fullAddress: "Jalan Raya Kartasura No.KM.7, Banaran, Pabelan, Surakarta, Kabupaten Sukoharjo, Jawa Tengah 57102",
            workingHours: "Senin - Jumat: 08:00 - 16:00 WIB",
            phone: "+62 813-2888-3992",
            description: "Laboratorium terdepan di Jawa Tengah",
            coordinates: { lat: -7.5602571, lng: 110.7687605 },
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4567!2d110.7661858!3d-7.5602571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145a80b90669%3A0x23a18381da5ee613!2sPerum%20Jasa%20Tirta%201%20WS%20Bengawan%20Solo!5e0!3m2!1sen!2sid!4v1644444444444!5m2!1sen!2sid"
        }
    };

    // Animation variants
    const zoomIn = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    const fadeInUp = {
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const slideIn = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gray-50">
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
                        src="/assets/images/lengkap_croped.jpg"
                        alt="Laboratorium Lingkungan - Hubungi Kami"
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
                            Hubungi Kami,<br />
                            <span className="text-blue-300">Solusi Analisis Lingkungan</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
                            Siap melayani kebutuhan analisis lingkungan Anda dengan standar kualitas terbaik
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Branch Selection Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cabang Laboratorium Kami
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                            Pilih cabang laboratorium untuk melihat informasi kontak lengkap
                        </p>
                    </motion.div>

                    {/* Branch Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                        {Object.entries(branches).map(([key, branch], index) => (
                            <motion.div
                                key={key}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                                    selectedBranch === key 
                                        ? 'ring-4 ring-blue-500 shadow-2xl' 
                                        : 'hover:shadow-xl'
                                }`}
                                onClick={() => setSelectedBranch(key as "malang" | "mojokerto" | "solo")}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                                        <Image
                                            src={branch.image}
                                            alt={branch.name}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                                            <BuildingOfficeIcon />
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                            {branch.name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 mb-3 flex items-center">
                                            <MapPinIcon />
                                            <span className="ml-2">{branch.shortAddress}</span>
                                        </p>
                                        <p className="text-xs sm:text-sm text-blue-600 font-medium flex items-center break-all">
                                            <EnvelopeIcon />
                                            <span className="ml-2">{branch.email}</span>
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-500 mt-3">
                                            {branch.description}
                                        </p>
                                        {selectedBranch === key && (
                                            <div className="mt-4 px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-xs sm:text-sm font-medium text-center">
                                                ✓ Cabang Terpilih
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Information Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedBranch}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {/* Address Card */}
                            <motion.div 
                                className="group relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                                whileHover={{ y: -5 }}
                                onClick={() => {
                                    if (selectedBranch === 'malang') {
                                        window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.9655562,112.6162775,17z/data=!3m1!4b1!4m6!3m5!1s0x2e788281b93990df:0xd788d8a4e1d290d8!8m2!3d-7.9655562!4d112.6188524!16s%2Fg%2F1hm3y8t5g?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                    } else if (selectedBranch === 'mojokerto') {
                                        window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.4459199,112.4652101,918m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e780dd77cebd423:0x50fbc33142b54443!8m2!3d-7.4459199!4d112.4652101!16s%2Fg%2F11b6qd3128?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                    } else if (selectedBranch === 'solo') {
                                        window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+1+WS+Bengawan+Solo/@-7.562734,110.7642472,918m/data=!3m1!1e3!4m15!1m8!3m7!1s0x2e7a1450e9214cdb:0xc2c8e1c39fe06a0c!2sJl.+Proyek+Bengawan+Solo,+Banaran,+Pabelan,+Kec.+Kartasura,+Kabupaten+Sukoharjo,+Jawa+Tengah+57169!3b1!8m2!3d-7.562336!4d110.7676792!16s%2Fg%2F11bx2czjxq!3m5!1s0x2e7a145a80b90669:0x23a18381da5ee613!8m2!3d-7.5602571!4d110.7687605!16s%2Fg%2F1pzq1l1dc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                    }
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-blue-600">
                                            <MapPinIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                        Alamat Kantor
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {branches[selectedBranch].fullAddress}
                                    </p>
                                    <div className="mt-2 sm:mt-3 flex items-center text-xs text-gray-500">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                                        Klik untuk buka Google Maps
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 rounded-full -mr-8 sm:-mr-10 -mb-8 sm:-mb-10 opacity-20"></div>
                            </motion.div>

                            {/* Working Hours Card */}
                            <motion.div 
                                className="group relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-emerald-600">
                                            <ClockIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                        Jam Kerja
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {branches[selectedBranch].workingHours}
                                    </p>
                                    <div className="mt-2 sm:mt-3 px-2 sm:px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                                        Buka Sekarang
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-emerald-50 rounded-full -mr-8 sm:-mr-10 -mb-8 sm:-mb-10 opacity-20"></div>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div 
                                className="group relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                                whileHover={{ y: -5 }}
                                onClick={() => {
                                    window.open(`https://mail.google.com/mail/?view=cm&to=${branches[selectedBranch].email}`, '_blank');
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-purple-600">
                                            <EnvelopeIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                        Email Address
                                    </h4>
                                    <p className="text-xs sm:text-sm text-purple-600 font-medium hover:text-purple-800 transition-colors duration-200 break-all">
                                        {branches[selectedBranch].email}
                                    </p>
                                    <div className="mt-2 sm:mt-3 flex items-center text-xs text-gray-500">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                                        Klik untuk buka Gmail
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-purple-50 rounded-full -mr-8 sm:-mr-10 -mb-8 sm:-mb-10 opacity-20"></div>
                            </motion.div>

                            {/* WhatsApp Card */}
                            <motion.div 
                                className="group relative bg-white rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                                whileHover={{ y: -5 }}
                                onClick={() => {
                                    const phoneNumber = branches[selectedBranch].phone.replace(/\D/g, '');
                                    const message = `Halo ${branches[selectedBranch].name}, saya ingin berkonsultasi mengenai layanan laboratorium.`;
                                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-green-600">
                                            <WhatsAppIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                                        WhatsApp
                                    </h4>
                                    <p className="text-xs sm:text-sm text-green-600 font-medium hover:text-green-800 transition-colors duration-200">
                                        {branches[selectedBranch].phone}
                                    </p>
                                    <div className="mt-2 sm:mt-3 flex items-center text-xs text-gray-500">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                        Klik untuk chat WhatsApp
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-green-50 rounded-full -mr-8 sm:-mr-10 -mb-8 sm:-mb-10 opacity-20"></div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Kirim Pesan</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
                            Silakan hubungi kami melalui formulir di bawah ini atau melalui email di{" "}
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`https://mail.google.com/mail/?view=cm&to=${branches[selectedBranch].email}`, '_blank');
                                }}
                                className="underline transition-colors duration-200 text-blue-600 hover:text-blue-800 cursor-pointer"
                            >
                                {branches[selectedBranch].email}
                            </a>
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form className="space-y-4 sm:space-y-6 bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Masukkan nama lengkap Anda"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Masukkan email Anda"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                        placeholder="Subjek pesan Anda"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="branch" className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                                        Cabang Tujuan
                                    </label>
                                    <select
                                        id="branch"
                                        name="branch"
                                        value={selectedBranch}
                                        onChange={(e) => setSelectedBranch(e.target.value as "malang" | "mojokerto" | "solo")}
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                    >
                                        <option value="malang">Lab. Malang</option>
                                        <option value="mojokerto">Lab. Mojokerto</option>
                                        <option value="solo">Lab. Solo</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block font-semibold mb-2 text-gray-700 text-sm sm:text-base">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                        rows={5}
                                        placeholder="Tulis pesan Anda di sini..."
                                        required
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:scale-[1.02] focus:ring-4 focus:ring-blue-300 shadow-lg text-sm sm:text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Kirim Pesan
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 h-full">
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                        Lokasi {branches[selectedBranch].name}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {branches[selectedBranch].fullAddress}
                                    </p>
                                </div>
                                
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedBranch}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md"
                                    >
                                        <iframe
                                            src={branches[selectedBranch].mapEmbed}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-xl"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                
                                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                                    <div className="text-xs sm:text-sm text-gray-600">
                                        <p className="font-medium">Jam Operasional:</p>
                                        <p>{branches[selectedBranch].workingHours}</p>
                                    </div>
                                    <motion.button
                                        onClick={() => {
                                            if (selectedBranch === 'malang') {
                                                window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.9655562,112.6162775,17z/data=!3m1!4b1!4m6!3m5!1s0x2e788281b93990df:0xd788d8a4e1d290d8!8m2!3d-7.9655562!4d112.6188524!16s%2Fg%2F1hm3y8t5g?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                            } else if (selectedBranch === 'mojokerto') {
                                                window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.4459199,112.4652101,918m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e780dd77cebd423:0x50fbc33142b54443!8m2!3d-7.4459199!4d112.4652101!16s%2Fg%2F11b6qd3128?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                            } else if (selectedBranch === 'solo') {
                                                window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+1+WS+Bengawan+Solo/@-7.562734,110.7642472,918m/data=!3m1!1e3!4m15!1m8!3m7!1s0x2e7a1450e9214cdb:0xc2c8e1c39fe06a0c!2sJl.+Proyek+Bengawan+Solo,+Banaran,+Pabelan,+Kec.+Kartasura,+Kabupaten+Sukoharjo,+Jawa+Tengah+57169!3b1!8m2!3d-7.562336!4d110.7676792!16s%2Fg%2F11bx2czjxq!3m5!1s0x2e7a145a80b90669:0x23a18381da5ee613!8m2!3d-7.5602571!4d110.7687605!16s%2Fg%2F1pzq1l1dc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                            }
                                        }}
                                        className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MapPinIcon />
                                        Buka di Google Maps
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}