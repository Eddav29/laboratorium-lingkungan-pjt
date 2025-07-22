import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-12 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Info Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Info Kontak</h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-4">
              Di bawah ini merupakan informasi kontak dari Laboratorium Lingkungan Jasa Tirta 1
            </p>
            
            <div className="space-y-3">
              {/* Alamat */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Alamat</p>
                  <p className="text-gray-200 text-xs font-medium">Jalan Surabaya 2A, Malang</p>
                </div>
              </div>

              {/* Telp */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Telp</p>
                  <p className="text-gray-200 text-xs font-medium">578-393-4937</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                  <p className="text-gray-200 text-xs font-medium">081230738591</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Tentang Kami
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Visi dan Tanggung Jawab
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Road Map
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Perizinan
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Introduction
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Organisation Team
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Press Enquiries
              </a>
              <a href="#" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-xs">
                Contact Us
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
                  Laboratorium Lingkungan harus melakukan sendiri pengujian contoh uji parameter lingkungan (LAMPIRAN II.D.3)
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
