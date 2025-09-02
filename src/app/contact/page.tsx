"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

// Modern Professional Icons
const MapPinIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EnvelopeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
);

const BuildingOfficeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3" />
    </svg>
);

const SendIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export default function ContactPage() {
    // State for selected branch
    const [selectedBranch, setSelectedBranch] = useState<"malang" | "mojokerto" | "solo" | "parapat">("malang");
    
    // Ref for scroll target
    const contactInfoRef = useRef<HTMLDivElement>(null);
    
    // Anti-spam states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
    const [submissionCount, setSubmissionCount] = useState(0);
    const [honeypot, setHoneypot] = useState("");
    const [formStartTime, setFormStartTime] = useState<number>(0);
    
    // Function to scroll to contact info section
    const scrollToContactInfo = () => {
        if (contactInfoRef.current) {
            const yOffset = -150; // Offset untuk memberikan ruang di atas (lebih besar)
            const element = contactInfoRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };
    
    // Initialize form start time when component mounts
    React.useEffect(() => {
        setFormStartTime(Date.now());
    }, []);

    // Branch data
    const branches = {
        malang: {
            name: "Lab. Malang",
            image: "/assets/images/lab.png",
            shortAddress: "Malang, Jawa Timur",
            email: "lablingkunganpjt1@gmail.com",
            fullAddress: "Jl. Surabaya No.2A, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
            workingHours: "Senin - Jumat: 07:00 - 16:00 WIB",
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
            workingHours: "Senin - Jumat: 07:00 - 16:00 WIB",
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
            workingHours: "Senin - Jumat: 07:00 - 16:00 WIB",
            phone: "+62 813-2888-3992",
            description: "Laboratorium terdepan di Jawa Tengah",
            coordinates: { lat: -7.5602571, lng: 110.7687605 },
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4567!2d110.7661858!3d-7.5602571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a145a80b90669%3A0x23a18381da5ee613!2sPerum%20Jasa%20Tirta%201%20WS%20Bengawan%20Solo!5e0!3m2!1sen!2sid!4v1644444444444!5m2!1sen!2sid"
        },
        parapat: {
            name: "Lab. Parapat",
            image: "/assets/images/lab.png",
            shortAddress: "Parapat, Sumatera Utara",
            email: "lablingkunganparapat@gmail.com",
            fullAddress: "Jl Pora-pora Kel. Tigaraja Kec. Girsang Sipangan Bolon Kab. Simalungun, Sumatera Utara",
            workingHours: "Senin - Jumat: 07:00 - 16:00 WIB",
            phone: "+62 815-9988-7766",
            description: "Cabang terbaru dengan fasilitas modern di Danau Toba",
            coordinates: { lat: 2.6690234, lng: 98.9367891 },
            mapEmbed: "coming-soon"
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-indigo-900/70 backdrop-blur-[0.5px]"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
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
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight mt-8">
                            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                Hubungi Kami,
                            </span>
                            <br />
                            <span style={{
                                background: 'linear-gradient(to right, #61eabc, #1f6ff4)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Solusi Analisis Lingkungan
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-blue-100/90 leading-relaxed">
                            Siap melayani kebutuhan analisis lingkungan Anda dengan standar kualitas terbaik dan teknologi terdepan
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Terakreditasi</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">ISO Certified</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Branch Selection Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                            background: 'linear-gradient(to right, rgba(97, 234, 188, 0.2), rgba(31, 111, 244, 0.2))'
                        }}>
                            <BuildingOfficeIcon />
                            <span className="text-sm font-semibold" style={{ color: '#1f6ff4' }}>Jaringan Laboratorium</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{
                            background: 'linear-gradient(to right, #61eabc, #1f6ff4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Cabang Laboratorium Kami
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Pilih cabang laboratorium untuk melihat informasi kontak lengkap dan fasilitas yang tersedia
                        </p>
                    </motion.div>

                    {/* Branch Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-6xl mx-auto">
                        {Object.entries(branches).map(([key, branch], index) => (
                            <motion.div
                                key={key}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group cursor-pointer transform transition-all duration-200 hover:scale-105 relative"
                                onClick={() => {
                                    setSelectedBranch(key as "malang" | "mojokerto" | "solo" | "parapat");
                                    // Small delay to allow state update before scrolling
                                    setTimeout(() => {
                                        scrollToContactInfo();
                                    }, 100);
                                }}
                            >
                                {/* Rounded Gradient Border */}
                                <div 
                                    className={`absolute inset-0 rounded-3xl opacity-100 transition-all duration-200 ${
                                        selectedBranch === key 
                                            ? 'shadow-2xl shadow-blue-500/20' 
                                            : 'bg-gradient-to-r from-slate-300 via-gray-300 to-slate-300 hover:opacity-0'
                                    }`} 
                                    style={{
                                        background: selectedBranch === key 
                                            ? 'linear-gradient(to right, #61eabc, #1f6ff4)' 
                                            : undefined
                                    }}>
                                </div>
                                {/* Hover Gradient */}
                                <div 
                                    className={`absolute inset-0 rounded-3xl opacity-0 transition-all duration-200 hover:opacity-100 ${
                                        selectedBranch === key ? 'hidden' : ''
                                    }`}
                                    style={{
                                        background: 'linear-gradient(to right, rgba(97, 234, 188, 0.6), rgba(31, 111, 244, 0.6))'
                                    }}>
                                </div>
                                <div className="absolute inset-[2px] bg-white/80 backdrop-blur-sm rounded-3xl"></div>
                                
                                <div className="relative bg-transparent rounded-3xl overflow-hidden h-full">
                                    {selectedBranch === key && (
                                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg z-10" style={{
                                            background: 'linear-gradient(to right, #61eabc, #1f6ff4)'
                                        }}>
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="relative h-36 sm:h-40 lg:h-44 overflow-hidden">
                                        <Image
                                            src={branch.image}
                                            alt={branch.name}
                                            fill
                                            className="object-cover transition-transform duration-200 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                        <div className="absolute top-3 left-3">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                                                <BuildingOfficeIcon />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3 text-white">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs font-medium">Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 lg:p-6">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                            {branch.name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                                            {branch.shortAddress}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-blue-600 font-medium">
                                                <MapPinIcon />
                                                <span className="ml-2">Lihat Detail</span>
                                            </div>
                                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Information Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            ref={contactInfoRef}
                            key={selectedBranch}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
                        >
                            {/* Address Card */}
                            <motion.div 
                                className={`group relative rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-150 overflow-hidden ${
                                    selectedBranch !== 'parapat' ? 'cursor-pointer' : ''
                                }`}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.15 }}
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
                                {/* Rounded Gradient Border */}
                                <div className="absolute inset-0 rounded-3xl opacity-100" style={{
                                    background: 'linear-gradient(to right, #61eabc, #1f6ff4)'
                                }}></div>
                                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                                
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-150 shadow-lg" style={{
                                        background: 'linear-gradient(to bottom right, #61eabc, #1f6ff4)'
                                    }}>
                                        <div className="text-white">
                                            <MapPinIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-150">
                                        Alamat Kantor
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        {branches[selectedBranch].fullAddress}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border" style={{
                                        background: 'linear-gradient(to right, rgba(97, 234, 188, 0.1), rgba(31, 111, 244, 0.1))',
                                        color: '#1f6ff4',
                                        borderColor: '#61eabc'
                                    }}>
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1f6ff4' }}></div>
                                        {selectedBranch === 'parapat' ? 'Peta akan segera tersedia' : 'Klik untuk buka Google Maps'}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Working Hours Card */}
                            <motion.div 
                                className="group relative rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-150 overflow-hidden"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.15 }}
                            >
                                {/* Rounded Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-100"></div>
                                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                                
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-150 shadow-lg">
                                        <div className="text-white">
                                            <ClockIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors duration-150">
                                        Jam Operasional
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        {branches[selectedBranch].workingHours}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full text-xs font-medium text-emerald-700 border border-emerald-200">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                        Buka Sekarang
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp Card */}
                            <motion.div 
                                className={`group relative rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-150 overflow-hidden ${
                                    selectedBranch !== 'parapat' ? 'cursor-pointer' : ''
                                }`}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.15 }}
                                onClick={() => {
                                    if (selectedBranch !== 'parapat') {
                                        const phoneNumber = branches[selectedBranch].phone.replace(/\D/g, '');
                                        const message = `Halo ${branches[selectedBranch].name}, saya ingin berkonsultasi mengenai layanan laboratorium.`;
                                        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                                    }
                                }}
                            >
                                {/* Rounded Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-100"></div>
                                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                                
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-150 shadow-lg">
                                        <div className="text-white">
                                            <WhatsAppIcon />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-green-600 transition-colors duration-150">
                                        WhatsApp
                                    </h4>
                                    {selectedBranch === 'parapat' ? (
                                        <>
                                            <p className="text-sm text-slate-600 font-medium mb-4">
                                                Coming Soon
                                            </p>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                                                WhatsApp akan segera tersedia
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-sm text-green-600 font-semibold hover:text-green-800 transition-colors duration-200 mb-4">
                                                {branches[selectedBranch].phone}
                                            </p>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-xs font-medium text-green-700 border border-green-200">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                Klik untuk chat WhatsApp
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
                        background: '#61eabc'
                    }}></div>
                    <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" style={{
                        background: '#1f6ff4'
                    }}></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" style={{
                        background: 'linear-gradient(45deg, #61eabc, #1f6ff4)'
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                            background: 'linear-gradient(to right, rgba(97, 234, 188, 0.2), rgba(31, 111, 244, 0.2))'
                        }}>
                            <EnvelopeIcon />
                            <span className="text-sm font-semibold" style={{ color: '#1f6ff4' }}>Hubungi Kami</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{
                            background: 'linear-gradient(to right, #61eabc, #1f6ff4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Kirim Pesan
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
                            Silakan hubungi kami melalui formulir di bawah ini{selectedBranch !== 'parapat' ? ' atau melalui email di ' : ''}
                            {selectedBranch !== 'parapat' && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ml-1">
                                    <EnvelopeIcon />
                                    {branches[selectedBranch].email}
                                </span>
                            )}
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
                            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                                {/* Rounded Form Header Decoration */}
                                <div className="absolute inset-0 rounded-3xl opacity-100" style={{
                                    background: 'linear-gradient(to right, #61eabc, #1f6ff4)'
                                }}></div>
                                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                                
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
                                            background: 'linear-gradient(to bottom right, #61eabc, #1f6ff4)'
                                        }}>
                                            <EnvelopeIcon />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">Formulir Kontak</h3>
                                            <p className="text-sm text-slate-600">Isi form untuk menghubungi kami</p>
                                        </div>
                                    </div>
                                    
                                    <form 
                                        className="space-y-6"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            
                                            // Anti-spam validations
                                            const currentTime = Date.now();
                                            
                                            // 1. Check if honeypot field is filled (bot detection)
                                            if (honeypot.trim() !== "") {
                                                console.log("Spam detected: Honeypot field filled");
                                                return;
                                            }
                                            
                                            // 2. Check minimum time spent on form (too fast = bot)
                                            const timeSpent = currentTime - formStartTime;
                                            if (timeSpent < 5000) { // Less than 5 seconds
                                                alert("Mohon luangkan waktu untuk mengisi formulir dengan benar.");
                                                return;
                                            }
                                            
                                            // 3. Rate limiting - prevent rapid submissions
                                            if (currentTime - lastSubmissionTime < 30000) { // 30 seconds cooldown
                                                alert("Harap tunggu 30 detik sebelum mengirim pesan lagi.");
                                                return;
                                            }
                                            
                                            // 4. Check submission count per session
                                            if (submissionCount >= 3) {
                                                alert("Anda telah mencapai batas maksimum pengiriman pesan. Silakan refresh halaman untuk melanjutkan.");
                                                return;
                                            }
                                            
                                            // 5. Prevent double submission
                                            if (isSubmitting) {
                                                return;
                                            }
                                            
                                            setIsSubmitting(true);
                                            
                                            const formData = new FormData(e.target as HTMLFormElement);
                                            const name = formData.get('name') as string;
                                            const subject = formData.get('subject') as string;
                                            const message = formData.get('message') as string;
                                            
                                            // 6. Content validation - basic spam detection
                                            const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money', 'urgent', 'limited time'];
                                            const fullText = `${name} ${subject} ${message}`.toLowerCase();
                                            const hasSpamContent = spamKeywords.some(keyword => fullText.includes(keyword));
                                            
                                            if (hasSpamContent) {
                                                alert("Pesan Anda terdeteksi mengandung konten yang tidak diperbolehkan.");
                                                setIsSubmitting(false);
                                                return;
                                            }
                                            
                                            // 7. Check for excessive URLs or special characters
                                            const urlCount = (message.match(/https?:\/\//g) || []).length;
                                            if (urlCount > 2) {
                                                alert("Pesan tidak boleh mengandung lebih dari 2 URL.");
                                                setIsSubmitting(false);
                                                return;
                                            }
                                            
                                            // 8. Basic length validation
                                            if (message.length < 250) {
                                                alert("Pesan terlalu pendek. Minimal 250 karakter.");
                                                setIsSubmitting(false);
                                                return;
                                            }
                                            
                                            if (message.length > 2000) {
                                                alert("Pesan terlalu panjang. Maksimal 2000 karakter.");
                                                setIsSubmitting(false);
                                                return;
                                            }
                                            
                                            // Get recipient email based on selected branch
                                            const recipientEmail = branches[selectedBranch].email;
                                            
                                            // Create email template
                                            const emailBody = `Halo ${branches[selectedBranch].name},

Saya ${name} ingin menghubungi Anda terkait layanan laboratorium.

${message}

Terima kasih atas perhatiannya.

Salam hormat,
${name}`;
                                            
                                            // Construct Gmail URL
                                            const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
                                            
                                            // Update anti-spam tracking
                                            setLastSubmissionTime(currentTime);
                                            setSubmissionCount(prev => prev + 1);
                                            
                                            // Open Gmail in new tab
                                            window.open(gmailUrl, '_blank');
                                            
                                            // Reset form after successful submission
                                            setTimeout(() => {
                                                setIsSubmitting(false);
                                                (e.target as HTMLFormElement).reset();
                                                setFormStartTime(Date.now()); // Reset form timing
                                            }, 1000);
                                        }}
                                    >
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                                                Nama Lengkap
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="w-full border-2 border-slate-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base bg-white/80 backdrop-blur-sm placeholder-slate-400"
                                                    placeholder="Masukkan nama lengkap Anda"
                                                    minLength={2}
                                                    maxLength={100}
                                                    pattern="^[a-zA-Z\s]+$"
                                                    title="Nama hanya boleh mengandung huruf dan spasi"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Honeypot field - hidden from users but visible to bots */}
                                        <div style={{ display: 'none' }}>
                                            <label htmlFor="website">Website (Leave blank):</label>
                                            <input
                                                type="text"
                                                id="website"
                                                name="website"
                                                value={honeypot}
                                                onChange={(e) => setHoneypot(e.target.value)}
                                                tabIndex={-1}
                                                autoComplete="off"
                                            />
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <label htmlFor="subject" className="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                                                Subjek
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    className="w-full border-2 border-slate-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base bg-white/80 backdrop-blur-sm placeholder-slate-400"
                                                    placeholder="Subjek pesan Anda"
                                                    minLength={10}
                                                    maxLength={200}
                                                    required
                                                />
                                            </div>
                                            <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                                Minimal 10 karakter, maksimal 200 karakter
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <label htmlFor="branch" className="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                                                Cabang Tujuan
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="branch"
                                                    name="branch"
                                                    value={selectedBranch}
                                                    onChange={(e) => setSelectedBranch(e.target.value as "malang" | "mojokerto" | "solo" | "parapat")}
                                                    className="w-full border-2 border-slate-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                                                >
                                                    <option value="malang">Lab. Malang</option>
                                                    <option value="mojokerto">Lab. Mojokerto</option>
                                                    <option value="solo">Lab. Solo</option>
                                                    <option value="parapat">Lab. Parapat</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <label htmlFor="message" className="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                                                Pesan
                                            </label>
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    className="w-full border-2 border-slate-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base bg-white/80 backdrop-blur-sm placeholder-slate-400 resize-none"
                                                    rows={6}
                                                    placeholder="Tulis pesan Anda di sini..."
                                                    minLength={250}
                                                    maxLength={2000}
                                                    required
                                                />
                                            </div>
                                            <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                                Minimal 250 karakter, maksimal 2000 karakter
                                            </div>
                                        </div>
                                        
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-semibold transform transition-all duration-200 focus:ring-4 focus:ring-blue-300 shadow-lg text-sm sm:text-base relative overflow-hidden group ${
                                                isSubmitting 
                                                    ? 'bg-slate-400 text-slate-600 cursor-not-allowed' 
                                                    : 'text-white hover:shadow-xl hover:scale-[1.02]'
                                            }`}
                                            style={!isSubmitting ? {
                                                background: 'linear-gradient(to right, #61eabc, #1f6ff4)'
                                            } : undefined}
                                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"></div>
                                            <div className="relative flex items-center justify-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
                                                        Mengirim Pesan...
                                                    </>
                                                ) : (
                                                    <>
                                                        <SendIcon />
                                                        Kirim Pesan
                                                    </>
                                                )}
                                            </div>
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="rounded-3xl p-6 sm:p-8 shadow-2xl h-full relative overflow-hidden">
                                {/* Rounded Map Header Decoration */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl opacity-100"></div>
                                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                                
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                                            <MapPinIcon />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800">
                                                Lokasi {branches[selectedBranch].name}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {branches[selectedBranch].shortAddress}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                                        <p className="text-sm text-slate-700 leading-relaxed">
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
                                            className="w-full h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/50"
                                        >
                                            {branches[selectedBranch].mapEmbed === "coming-soon" ? (
                                                <div className="w-full h-full flex items-center justify-center rounded-2xl relative overflow-hidden" style={{
                                                    background: 'linear-gradient(to bottom right, rgba(97, 234, 188, 0.1), rgba(31, 111, 244, 0.1))'
                                                }}>
                                                    <div className="absolute inset-0" style={{
                                                        background: 'linear-gradient(to bottom right, rgba(97, 234, 188, 0.1), rgba(31, 111, 244, 0.1))'
                                                    }}></div>
                                                    <div className="relative text-center p-8">
                                                        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-xl" style={{
                                                            background: 'linear-gradient(to bottom right, #61eabc, #1f6ff4)'
                                                        }}>
                                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                                                            </svg>
                                                        </div>
                                                        <h4 className="text-2xl font-bold text-slate-800 mb-3">Coming Soon</h4>
                                                        <p className="text-slate-600 text-sm leading-relaxed">Peta lokasi akan segera tersedia untuk memudahkan Anda menemukan kami</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <iframe
                                                    src={branches[selectedBranch].mapEmbed}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    className="rounded-2xl"
                                                />
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                    
                                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <ClockIcon />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">Jam Operasional:</p>
                                                <p className="text-slate-600 text-sm">{branches[selectedBranch].workingHours}</p>
                                            </div>
                                        </div>
                                        <motion.button
                                            onClick={() => {
                                                if (selectedBranch === 'malang') {
                                                    window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.9655562,112.6162775,17z/data=!3m1!4b1!4m6!3m5!1s0x2e788281b93990df:0xd788d8a4e1d290d8!8m2!3d-7.9655562!4d112.6188524!16s%2Fg%2F1hm3y8t5g?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                                } else if (selectedBranch === 'mojokerto') {
                                                    window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.4459199,112.4652101,918m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e780dd77cebd423:0x50fbc33142b54443!8m2!3d-7.4459199!4d112.4652101!16s%2Fg%2F11b6qd3128?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                                } else if (selectedBranch === 'solo') {
                                                    window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta+1+WS+Bengawan+Solo/@-7.562734,110.7642472,918m/data=!3m1!1e3!4m15!1m8!3m7!1s0x2e7a1450e9214cdb:0xc2c8e1c39fe06a0c!2sJl.+Proyek+Bengawan+Solo,+Banaran,+Pabelan,+Kec.+Kartasura,+Kabupaten+Sukoharjo,+Jawa+Tengah+57169!3b1!8m2!3d-7.562336!4d110.7676792!16s%2Fg%2F11bx2czjxq!3m5!1s0x2e7a145a80b90669:0x23a18381da5ee613!8m2!3d-7.5602571!4d110.7687605!16s%2Fg%2F1pzq1l1dc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                                } else if (selectedBranch === 'parapat') {
                                                    window.open('https://www.google.com/maps/place/Perum+Jasa+Tirta/@2.6659177,98.9477068,925m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3031ed004d79578f:0xb093f3a92d83ab33!8m2!3d2.6659177!4d98.9477068!16s%2Fg%2F11vkb4ytz1?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
                                                }
                                            }}
                                            disabled={selectedBranch === 'parapat'}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg text-sm w-full sm:w-auto justify-center relative overflow-hidden group ${
                                                selectedBranch === 'parapat' 
                                                    ? 'bg-slate-400 text-slate-600 cursor-not-allowed' 
                                                    : 'text-white hover:shadow-xl'
                                            }`}
                                            style={selectedBranch !== 'parapat' ? {
                                                background: 'linear-gradient(to right, #61eabc, #1f6ff4)'
                                            } : undefined}
                                            whileHover={selectedBranch !== 'parapat' ? { scale: 1.05 } : {}}
                                            whileTap={selectedBranch !== 'parapat' ? { scale: 0.95 } : {}}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"></div>
                                            <div className="relative flex items-center gap-2">
                                                <MapPinIcon />
                                                {selectedBranch === 'parapat' ? 'Segera Hadir' : 'Buka di Google Maps'}
                                            </div>
                                        </motion.button>
                                    </div>
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