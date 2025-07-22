"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image with Darkening Overlay */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/assets/images/kolase.jpg)`,
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
                {/* Dark overlay */}
                <motion.div 
                    className="absolute inset-0 bg-black opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge - Slide down from top */}
                    <motion.div 
                        className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="mr-2">🏆</span>
                        Professional • Ethic • OHS
                    </motion.div>

                    {/* Main Heading - Stagger animation */}
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Laboratorium Lingkungan
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-blue-300"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.6 }}
                        >
                            Perum Jasa Tirta I
                        </motion.span>
                    </motion.h1>

                    {/* Credentials - Fade in from bottom with stagger */}
                    <motion.div 
                        className="space-y-2 mb-8 text-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <motion.p 
                            className="text-lg font-medium"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                        >
                            AKREDITASI ISO 17025/2017 OLEH KAN (LP-1646-IDN)
                        </motion.p>
                        <motion.p 
                            className="text-base"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.0, duration: 0.5 }}
                        >
                            REGISTRASI KLHK (00015/LPJ/LABLING-1/LRK/KLHK)
                        </motion.p>
                        <motion.p 
                            className="text-base"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                        >
                            DITUNJUK SEBAGAI PERUSAHAAN JASA K3(KEMENAKER) 5/301/AS.0102/XI/2023
                        </motion.p>
                    </motion.div>

                    {/* Action Buttons - Scale up animation with hover effects */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.6 }}
                    >
                        <Link href="/profile">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
                                >
                                    Lebih Lanjut
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="/water-services">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-blue-600 bg-transparent text-white hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
                                >
                                    Cek Layanan
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>

                   
                </div>
                 {/* Optional: Floating scroll indicator - dipindah ke paling bawah */}
                    <motion.div
                        className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [10, 30, 10] }}
                        transition={{ 
                            opacity: { delay: 3, duration: 1 },
                            y: { delay: 3.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <div className="flex flex-col items-center text-white/70 cursor-pointer hover:text-white transition-colors duration-200">
                            <span className="text-sm mb-2">Scroll Down</span>
                            <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </motion.div>
            </div>
        </section>
    );
};

export default Hero;