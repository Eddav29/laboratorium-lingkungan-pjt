import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-12 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Info Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Alamat</p>
                  <a 
                    href="https://www.google.com/maps/place/Perum+Jasa+Tirta+I/@-7.9655562,112.6162775,17z/data=!3m1!4b1!4m6!3m5!1s0x2e788281b93990df:0xd788d8a4e1d290d8!8m2!3d-7.9655562!4d112.6188524!16s%2Fg%2F1hm3y8t5g?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-xs hover:text-white transition-colors duration-300"
                  >
                    Jalan Surabaya 2A, Malang, Jawa Timur
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/6281230738591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-xs hover:text-white transition-colors duration-300"
                  >
                    +62 812-3073-8591
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Instagram</p>
                  <a 
                    href="https://www.instagram.com/laboratorium.jasatirta1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-xs hover:text-white transition-colors duration-300"
                  >
                    @laboratorium.jasatirta1
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Tentang Kami</h3>
            <div className="space-y-2">
              <a 
                href="/about#company-info" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Tentang Kami
              </a>
              <a 
                href="/about#vision-duties" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Visi dan Tanggung Jawab
              </a>
              <a 
                href="/about#journey" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Perjalanan Kami
              </a>
              <a 
                href="/about#team" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Tim Kami
              </a>
              <a 
                href="/about#certification" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Sertifikasi dan Registrasi
              </a>
              <a 
                href="/about#partners" 
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs"
              >
                Partner Kami
              </a>
            </div>
          </div>

          {/* Perizinan Operasional */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Perizinan Operasional</h3>
            <div className="space-y-3">
              <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  PERMEN LHK NO 23/2020
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Laboratorium Lingkungan terakreditasi untuk pengujian parameter lingkungan sesuai standar nasional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 bg-slate-950">
        <div className="container mx-auto px-12 py-8 max-w-6xl">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 – Laboratorium Lingkungan Jasa Tirta I
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
