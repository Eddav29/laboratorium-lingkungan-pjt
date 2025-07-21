import Link from "next/link";

export default function ServicesAir() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Laboratorium Lingkungan PJT</div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/competence" className="hover:underline">Competence</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Analisis Air</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-blue-600 text-6xl mb-4">💧</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Layanan Analisis Air
            </h1>
            <p className="text-xl text-gray-600">
              Hello World - Placeholder untuk deskripsi lengkap layanan analisis air
            </p>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Parameter Fisik</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Parameter 1</li>
                <li>• Hello World - Parameter 2</li>
                <li>• Hello World - Parameter 3</li>
                <li>• Hello World - Parameter 4</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Parameter Kimia</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Parameter A</li>
                <li>• Hello World - Parameter B</li>
                <li>• Hello World - Parameter C</li>
                <li>• Hello World - Parameter D</li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Proses Analisis
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">Sampling</h4>
                <p className="text-gray-600 text-sm">Hello World - Deskripsi langkah pertama</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">Preparasi</h4>
                <p className="text-gray-600 text-sm">Hello World - Deskripsi langkah kedua</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">Analisis</h4>
                <p className="text-gray-600 text-sm">Hello World - Deskripsi langkah ketiga</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">Pelaporan</h4>
                <p className="text-gray-600 text-sm">Hello World - Deskripsi langkah keempat</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Butuh Layanan Analisis Air?
            </h3>
            <p className="text-gray-600 mb-6">
              Hello World - Placeholder untuk ajakan konsultasi
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Laboratorium Lingkungan PJT. Hello World Footer.</p>
        </div>
      </footer>
    </div>
  );
}