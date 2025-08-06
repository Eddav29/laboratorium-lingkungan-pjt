import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan - 404',
  description: 'Halaman yang Anda cari tidak dapat ditemukan. Kembali ke beranda atau hubungi kami untuk bantuan.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau tidak tersedia.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Kembali ke Beranda
          </Link>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link 
              href="/services"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Layanan Kami
            </Link>
            <span className="hidden sm:inline text-gray-400">•</span>
            <Link 
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
